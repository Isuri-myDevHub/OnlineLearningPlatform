// const express = require('express');
// const router = express.Router();
// const courseController = require('../controllers/courseController');

// router.post('/', courseController.createCourse);
// router.get('/', courseController.getAllCourses);
// router.get('/:id', courseController.getCourseById);
// router.put('/:id', courseController.updateCourse);
// router.delete('/:id', courseController.deleteCourse);

// module.exports = router;


// routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');

// Routes for CRUD operations on courses
router.post('/courses', CourseController.createCourse);
router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:id', CourseController.getCourseById);
router.put('/courses/:id', CourseController.updateCourse);
router.delete('/courses/:id', CourseController.deleteCourse);

module.exports = router;
