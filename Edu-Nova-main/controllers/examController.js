const ExamService = require('../services/examService');

class ExamController {
  // Create a new exam
  async createExam(req, res) {
    try {
      const exam = await ExamService.createExam(req.body);
      res.status(201).json({ message: 'Exam created successfully', exam });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all exams
  async getAllExams(req, res) {
    try {
      const exams = await ExamService.getAllExams();
      res.status(200).json(exams);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get an exam by ID
  async getExamById(req, res) {
    try {
      const exam = await ExamService.getExamById(req.params.id);
      if (!exam) return res.status(404).json({ message: 'Exam not found' });
      res.status(200).json(exam);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get exams by course ID
  async getExamsByCourse(req, res) {
    try {
      const exams = await ExamService.getExamsByCourse(req.params.courseId);
      res.status(200).json(exams);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update an exam
  async updateExam(req, res) {
    try {
      const exam = await ExamService.updateExam(req.params.id, req.body);
      if (!exam) return res.status(404).json({ message: 'Exam not found' });
      res.status(200).json({ message: 'Exam updated successfully', exam });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete an exam
  async deleteExam(req, res) {
    try {
      const exam = await ExamService.deleteExam(req.params.id);
      if (!exam) return res.status(404).json({ message: 'Exam not found' });
      res.status(200).json({ message: 'Exam deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ExamController();
