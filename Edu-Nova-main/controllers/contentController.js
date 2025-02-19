// controllers/contentController.js
const ContentService = require('../services/contentService');

class ContentController {
    async createContent(req, res) {
        try {
            const content = await ContentService.createContent(req.body);
            res.status(201).json({ message: 'Content created successfully', content });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllContent(req, res) {
        try {
            const content = await ContentService.getAllContent();
            res.status(200).json(content);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getContentById(req, res) {
        try {
            const content = await ContentService.getContentById(req.params.id);
            res.status(200).json(content);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get content by lesson ID (New method)
    async getContentByLessonId(req, res) {
        try {
            const lessonId = req.params.lessonId;
            const content = await ContentService.getContentByLessonId(lessonId);
            res.status(200).json(content);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateContent(req, res) {
        try {
            const content = await ContentService.updateContent(req.params.id, req.body);
            res.status(200).json({ message: 'Content updated successfully', content });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteContent(req, res) {
        try {
            await ContentService.deleteContent(req.params.id);
            res.status(200).json({ message: 'Content deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ContentController();
