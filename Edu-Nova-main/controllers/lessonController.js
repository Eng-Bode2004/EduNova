// controllers/lessonController.js
const LessonService = require('../services/lessonService');

class LessonController {
  // Create a new lesson
  async createLesson(req, res) {
    try {
      const lessonData = req.body;
      const lesson = await LessonService.createLesson(lessonData);
      res.status(201).json({ message: 'Lesson created successfully', lesson });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Get all lessons for a specific course
  async getLessonsByCourse(req, res) {
    try {
      const { courseId } = req.params;
      const lessons = await LessonService.getLessonsByCourse(courseId);
      res.status(200).json({ lessons });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get a specific lesson by ID
  async getLessonById(req, res) {
    try {
      const { id } = req.params;
      const lesson = await LessonService.getLessonById(id);
      if (!lesson) {
        return res.status(404).json({ message: 'Lesson not found' });
      }
      res.status(200).json({ lesson });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update a lesson
  async updateLesson(req, res) {
    try {
      const { id } = req.params;
      const lessonData = req.body;
      const updatedLesson = await LessonService.updateLesson(id, lessonData);
      res.status(200).json({ message: 'Lesson updated successfully', lesson: updatedLesson });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  // Delete a lesson
  async deleteLesson(req, res) {
    try {
      const { id } = req.params;
      await LessonService.deleteLesson(id);
      res.status(200).json({ message: 'Lesson deleted successfully' });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new LessonController();
