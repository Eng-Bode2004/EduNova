// services/contentService.js
const ContentModel = require('../models/content');

class ContentService {
    // Create a new content
    async createContent(data) {
        const content = new ContentModel(data);
        await content.save();
        return content;
    }

    // Get all content
    async getAllContent() {
        return await ContentModel.find();
    }

    // Get content by ID
    async getContentById(id) {
        return await ContentModel.findById(id);
    }

    // Get content by lesson ID (New method)
    async getContentByLessonId(lessonId) {
        return await ContentModel.find({ related_lesson: lessonId });
    }

    // Update content
    async updateContent(id, data) {
        return await ContentModel.findByIdAndUpdate(id, data, { new: true });
    }

    // Delete content
    async deleteContent(id) {
        return await ContentModel.findByIdAndDelete(id);
    }
}

module.exports = new ContentService();
