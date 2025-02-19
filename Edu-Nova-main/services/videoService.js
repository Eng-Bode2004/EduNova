const VideoModel = require('../models/video');

class VideoService {
  async uploadVideo(fileData) {
    const video = new VideoModel(fileData);
    return await video.save(); // Save video data into the database
  }

  async getAllVideo() {
    return await VideoModel.find(); // Retrieve all video records
  }

  async getVideoById(id) {
    return await VideoModel.findById(id); // Retrieve video by its ID
  }

  async deleteVideo(id) {
    return await VideoModel.findByIdAndDelete(id); // Delete video by ID
  }
}

module.exports = new VideoService();
