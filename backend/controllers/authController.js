const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Replace with your own secret key

// Register a new user
exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully!', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check role to allow only students to log in
    if (user.role !== 'student') {
      return res.status(403).json({ message: 'Only students can log in' });
    }

    // For admin, check default credentials
    if (user.role === 'admin') {
      const defaultUsername = 'admin';
      const defaultEmail = 'admin@example.com';
      const defaultPassword = 'admin123'; // Replace with your default admin password

      if (email !== defaultEmail || password !== defaultPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      // For students, validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// Logout (optional if using JWT)
exports.logout = async (req, res) => {
  // Perform any cleanup or token management if needed
  res.status(200).json({ message: 'Logout successful!' });
};
