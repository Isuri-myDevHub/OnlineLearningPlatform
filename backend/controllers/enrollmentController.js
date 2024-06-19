const { Enrollment } = require('../models');

// Create a new enrollment
exports.createEnrollment = async (req, res) => {
  const { studentId, courseId } = req.body;
  try {
    const enrollment = await Enrollment.create({ studentId, courseId });
    res.status(201).json({ message: 'Enrollment created successfully!', enrollment });
  } catch (error) {
    res.status(500).json({ message: 'Error creating enrollment', error });
  }
};

// Get all enrollments
exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enrollments', error });
  }
};

// Get enrollment by ID
exports.getEnrollmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enrollment', error });
  }
};

// Update enrollment
exports.updateEnrollment = async (req, res) => {
  const { id } = req.params;
  const { studentId, courseId } = req.body;
  try {
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    await enrollment.update({ studentId, courseId });
    res.status(200).json({ message: 'Enrollment updated successfully!', enrollment });
  } catch (error) {
    res.status(500).json({ message: 'Error updating enrollment', error });
  }
};

// Delete enrollment
exports.deleteEnrollment = async (req, res) => {
  const { id } = req.params;
  try {
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    await enrollment.destroy();
    res.status(200).json({ message: 'Enrollment deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting enrollment', error });
  }
};
