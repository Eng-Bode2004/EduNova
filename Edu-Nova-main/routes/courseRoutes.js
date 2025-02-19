// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes configuration
router.post('/', authMiddleware, CourseController.createCourse); // Create Course
router.get('/', authMiddleware, CourseController.getAllCourses); // Get All Courses
router.get('/:id', authMiddleware, CourseController.getCourseById); // Get Course by ID
router.put('/:id', authMiddleware, CourseController.updateCourse); // Update Course
router.delete('/:id', authMiddleware, CourseController.deleteCourse); // Delete Course

// Get Courses by User ID (Instructor or Student)
router.get('/user/:userId', authMiddleware, CourseController.getCoursesByUserId); // Get Courses by User ID

// Get Courses by Category ID
router.get('/category/:categoryId', authMiddleware, CourseController.getCoursesByCategory); // Get Courses by Category ID

module.exports = router;
