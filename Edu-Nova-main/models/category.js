const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  iconUrl: {
    type: String,
    required: true, // To ensure every category has an icon
  },
  courseCount: {
    type: Number,
    default: 0, // Automatically updated based on courses in this category
  },
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
