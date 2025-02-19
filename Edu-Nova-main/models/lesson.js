// models/lesson.js
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Refers to the Course model
    required: true,
  },
  Number:{
    type:Number,
    required:true,
  }
}, { timestamps: true }); // Automatically handles createdAt and updatedAt

module.exports = mongoose.model('Lesson', lessonSchema);
