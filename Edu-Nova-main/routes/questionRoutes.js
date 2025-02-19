const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/questionController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes configuration
router.post('/', authMiddleware, QuestionController.createQuestion); // Create Question
router.get('/', authMiddleware, QuestionController.getAllQuestions); // Get All Questions
router.get('/:id', authMiddleware, QuestionController.getQuestionById); // Get Question by ID
router.get('/course/:courseId', authMiddleware, QuestionController.getQuestionsByCourse); // Get Questions by Course ID
router.put('/:id', authMiddleware, QuestionController.updateQuestion); // Update Question
router.delete('/:id', authMiddleware, QuestionController.deleteQuestion); // Delete Question

module.exports = router;
