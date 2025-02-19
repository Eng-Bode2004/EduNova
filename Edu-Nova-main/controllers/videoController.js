const VideoService = require('../services/videoService');
const uploadCloudinary = require('../config/cloudinaryConfig');
const fs = require('fs');
class VideoController {
    async uploadVideo(req, res) {
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
            const savedVideo = await VideoService.uploadVideo(fileData);
            fs.unlinkSync(req.file.path)

            res.status(201).json({ message: 'Videossd uploaded successfully', data: savedVideo });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllVideo(req, res) {
        try {
            const videos = await VideoService.getAllVideo();
            res.status(200).json(videos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getVideoById(req, res) {
        try {
            const video = await VideoService.getVideoById(req.params.id);
            if (!video) {
                return res.status(404).json({ message: 'Video not found' });
            }
            res.status(200).json(video);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteVideo(req, res) {
        try {
            await VideoService.deleteVideo(req.params.id);
            res.status(200).json({ message: 'Video deleted successfully' });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new VideoController();
