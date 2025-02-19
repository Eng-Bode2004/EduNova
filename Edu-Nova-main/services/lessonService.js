// services/lessonService.js
const Lesson = require('../models/lesson');

class LessonService {
  // Create a new lesson
  async createLesson(data) {
    const lesson = new Lesson(data);
    return await lesson.save();
  }

  // Get all lessons by course ID
  async getLessonsByCourse(courseId) {
    return await Lesson.find({ course: courseId });
  }

  // Get a specific lesson by ID
  async getLessonById(id) {
    return await Lesson.findById(id);
  }

  // Update a lesson
  async updateLesson(id, data) {
    const lesson = await Lesson.findByIdAndUpdate(id, data, { new: true });
    if (!lesson) {
      throw new Error('Lesson not found');
    }
    return lesson;
  }

  // Delete a lesson
  async deleteLesson(id) {
    const lesson = await Lesson.findByIdAndDelete(id);
    if (!lesson) {
      throw new Error('Lesson not found');
    }
    return lesson;
  }
}

module.exports = new LessonService();
