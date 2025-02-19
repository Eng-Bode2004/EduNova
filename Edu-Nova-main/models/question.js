const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, // Text of the question
  },
  options: {
    type: [String],
    required: true, // List of possible answers
  },
  correctAnswer: {
    type: String,
    required: true, // Correct answer from options
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Reference to the Course model
    required: true, // Link to a course
  },
  difficultyLevel: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true, // Difficulty level of the question
  },
}, { timestamps: true }); // Automatically manages createdAt and updatedAt

module.exports = mongoose.model('Question', questionSchema);
