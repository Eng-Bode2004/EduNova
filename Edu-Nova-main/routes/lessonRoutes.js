// routes/lessonRoutes.js
const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/lessonController');

// Routes
router.post('/', LessonController.createLesson); // Create a new lesson
router.get('/course/:courseId', LessonController.getLessonsByCourse); // Get lessons by course ID
router.get('/:id', LessonController.getLessonById); // Get a specific lesson by ID
router.put('/:id', LessonController.updateLesson); // Update a lesson
router.delete('/:id', LessonController.deleteLesson); // Delete a lesson

module.exports = router;
