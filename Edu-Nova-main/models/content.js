// models/content.js

const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    related_course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    related_lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        required: false, // Optional, as not all content will be related to a lesson
    },
    content_data: {
        type: mongoose.Schema.Types.Mixed,
        required: true, // URL or content path, depending on the type
    },
    duration: {
        type: Number,
        required: false, // Optional, for video content
    },
    uploaded_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true }); // Automatically includes createdAt and updatedAt

module.exports = mongoose.model('Content', contentSchema);
