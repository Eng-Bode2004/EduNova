const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/imageController');
const upload = require('../middlewares/multer');
const authMiddleware = require('../middlewares/authMiddleware');

// Use authMiddleware to protect this route
router.post('/upload', authMiddleware, upload.single('image'), ImageController.uploadImages);
router.get('/', authMiddleware, ImageController.getAllImages);
router.get('/:id', authMiddleware, ImageController.getImageById);
router.delete('/:id', authMiddleware, ImageController.deleteImage);

module.exports = router;
