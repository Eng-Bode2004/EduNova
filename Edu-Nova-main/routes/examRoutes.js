const express = require('express');
const router = express.Router();
const ExamController = require('../controllers/examController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes configuration
router.post('/', authMiddleware, ExamController.createExam); // Create Exam
router.get('/', authMiddleware, ExamController.getAllExams); // Get All Exams
router.get('/:id', authMiddleware, ExamController.getExamById); // Get Exam by ID
router.get('/course/:courseId', authMiddleware, ExamController.getExamsByCourse); // Get Exams by Course ID
router.put('/:id', authMiddleware, ExamController.updateExam); // Update Exam
router.delete('/:id', authMiddleware, ExamController.deleteExam); // Delete Exam

module.exports = router;
