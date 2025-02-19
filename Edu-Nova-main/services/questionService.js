const QuestionModel = require('../models/question');
const CourseModel = require('../models/course');

class QuestionService {
  // Create a new question
  async createQuestion(questionData) {
    const question = new QuestionModel(questionData);
    return await question.save();
  }

  // Get all questions
  async getAllQuestions() {
    return await QuestionModel.find()
      .populate('course'); // Populate the course field
  }

  // Get a question by ID
  async getQuestionById(id) {
    return await QuestionModel.findById(id)
      .populate('course'); // Populate the course field
  }

  // Get all questions for a specific course
  async getQuestionsByCourse(courseId) {
    return await QuestionModel.find({ course: courseId })
      .populate('course'); // Populate the course field
  }

  // Update a question by ID
  async updateQuestion(id, questionData) {
    return await QuestionModel.findByIdAndUpdate(id, questionData, { new: true });
  }

  // Delete a question by ID
  async deleteQuestion(id) {
    return await QuestionModel.findByIdAndDelete(id);
  }
}

module.exports = new QuestionService();
