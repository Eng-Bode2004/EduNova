// routes/contentRoutes.js
const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/contentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes for managing content
router.post('/', authMiddleware, ContentController.createContent);
router.get('/', authMiddleware, ContentController.getAllContent);
router.get('/:id', authMiddleware, ContentController.getContentById);
router.get('/lesson/:lessonId', authMiddleware, ContentController.getContentByLessonId); // New route
router.put('/:id', authMiddleware, ContentController.updateContent);
router.delete('/:id', authMiddleware, ContentController.deleteContent);

module.exports = router;
