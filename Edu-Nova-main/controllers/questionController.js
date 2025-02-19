const QuestionService = require('../services/questionService');

class QuestionController {
  // Create a new question
  async createQuestion(req, res) {
    try {
      const question = await QuestionService.createQuestion(req.body);
      res.status(201).json({ message: 'Question created successfully', question });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all questions
  async getAllQuestions(req, res) {
    try {
      const questions = await QuestionService.getAllQuestions();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get a question by ID
  async getQuestionById(req, res) {
    try {
      const question = await QuestionService.getQuestionById(req.params.id);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all questions for a specific course
  async getQuestionsByCourse(req, res) {
    try {
      const questions = await QuestionService.getQuestionsByCourse(req.params.courseId);
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update a question by ID
  async updateQuestion(req, res) {
    try {
      const question = await QuestionService.updateQuestion(req.params.id, req.body);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      res.status(200).json({ message: 'Question updated successfully', question });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete a question by ID
  async deleteQuestion(req, res) {
    try {
      const question = await QuestionService.deleteQuestion(req.params.id);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new QuestionController();
