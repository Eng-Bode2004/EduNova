const ImageModel = require('../models/image');

class ImageService {
    async uploadImages(files) {
        const image = new ImageModel(files);
        return await image.save();

    }

    async getAllImages() {
        return await ImageModel.find();
    }

    async getImageById(id) {
        return await ImageModel.findById(id);
    }

    async deleteImage(id) {
        return await ImageModel.findByIdAndDelete(id);
    }
}

module.exports = new ImageService();
