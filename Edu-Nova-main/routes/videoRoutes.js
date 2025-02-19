const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/videoController');
const upload = require('../middlewares/videoMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Use authMiddleware to protect these routes
router.post('/upload', authMiddleware, upload.single('video'), VideoController.uploadVideo);
router.get('/', authMiddleware, VideoController.getAllVideo);
router.get('/:id', authMiddleware, VideoController.getVideoById);
router.delete('/:id', authMiddleware, VideoController.deleteVideo);

module.exports = router;
