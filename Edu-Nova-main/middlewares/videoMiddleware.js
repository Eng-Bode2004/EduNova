const multer = require('multer');

// Setup storage engine
const storage = multer.diskStorage({
  destination: 'videos', // Ensure this folder exists or create it
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Add unique timestamp to avoid overwriting
  }
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['video/mp4', 'video/mkv', 'video/avi', 'video/mov'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Unsupported file type'), false); // Reject file
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
