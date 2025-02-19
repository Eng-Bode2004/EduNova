// models/course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Reference to the Category model
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
  thumbnailUrl: {
    type: String,
    required: false, // Optional field
  },
  tags: [{
    type: String,
    required: false, // Optional field
  }],

  coursePrice:{
    type:Number,
    required: true, // Make price a required field
  }
}, { timestamps: true }); // Automatically includes createdAt and updatedAt

module.exports = mongoose.model('Course', courseSchema);
