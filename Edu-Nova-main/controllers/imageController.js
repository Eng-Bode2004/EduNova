const ImageService = require('../services/imageService');
const uploadCloudinary = require('../config/cloudinaryConfig');
const fs = require('fs');
class ImageController {
    async uploadImages(req, res) {
        try {
            if (!req.file) { // Changed from req.files to req.file
                throw new Error('No files uploaded.');
            }
            const result = await uploadCloudinary.uploads(req.file.path)
            const fileData = {
                url: result.url, // Accessing the path of the uploaded file
                //url: req.file.path, // Accessing the path of the uploaded file
                uploadedBy: req.user.id, // Assuming user ID is available from the session or token
                title: req.file.originalname, // Optional: You might want to allow users to set this
            };
            const savedImage = await ImageService.uploadImages(fileData);
            fs.unlinkSync(req.file.path)

            res.status(201).json({ message: 'Image uploaded successfully', data: savedImage });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllImages(req, res) {
        try {
            const images = await ImageService.getAllImages();
            res.status(200).json(images);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getImageById(req, res) {
        try {
            const image = await ImageService.getImageById(req.params.id);
            if (!image) {
                return res.status(404).json({ message: 'Image not found' });
            }
            res.status(200).json(image);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteImage(req, res) {
        try {
            await ImageService.deleteImage(req.params.id);
            res.status(200).json({ message: 'Image deleted successfully' });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new ImageController();
