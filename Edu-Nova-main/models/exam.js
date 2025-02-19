const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title of the exam
  },
  description: {
    type: String,
    default: '', // Description of the exam
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true, // Link to the course associated with the exam
  },
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classroom',
    required: false, // Optional, links to a classroom
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  }],
  students: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true, // The student taking the exam
    },
    score: {
      type: Number,
      default: 0, // Score obtained by the student
    },
    responses: [{
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
      },
      answer: {
        type: String,
      },
      correct: {
        type: Boolean,
      },
    }],
  }],
  totalMarks: {
    type: Number,
    default: 0, // Total marks for the exam
  },
  passingMarks: {
    type: Number,
    required: true, // Minimum marks required to pass the exam
  },
  startTime: {
    type: Date,
    required: true, // Start time of the exam
  },
  endTime: {
    type: Date,
    required: true, // End time of the exam
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed'],
    default: 'upcoming', // Status of the exam
  },
}, { timestamps: true }); // Automatically includes createdAt and updatedAt

module.exports = mongoose.model('Exam', examSchema);
