const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Same as used in authController.js

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'Token required' });
  }
};

module.exports = { authenticateJWT };
