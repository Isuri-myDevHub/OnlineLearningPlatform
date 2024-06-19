const { Course } = require('../models');

// Create a new course
exports.createCourse = async (req, res) => {
  const { title, description, instructor } = req.body;
  try {
    const course = await Course.create({ title, description, instructor });
    res.status(201).json({ message: 'Course created successfully!', course });
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, instructor } = req.body;
  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    await course.update({ title, description, instructor });
    res.status(200).json({ message: 'Course updated successfully!', course });
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    await course.destroy();
    res.status(200).json({ message: 'Course deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
};
