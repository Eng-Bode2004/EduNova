// Required Packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//app.use(cors());

// Configrations
const multerConfig = require('./middlewares/multer'); // Multer Configrations
const videoConfig = require('./middlewares/videoMiddleware'); // Multer Configrations
const MongoDB = require('./config/DataBase'); // Data Base Configrations





// .ENV configrations
require('dotenv').config();

// Routes
const permissionRoutes = require('./routes/permissionRoutes');
const rolesRoutes = require('./routes/roleRoutes');
const usersRoutes = require('./routes/userRoutes');
const imageRoutes = require('./routes/imageRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const videoRoutes = require('./routes/videoRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const courseRoutes = require('./routes/courseRoutes');
const contentRoutes = require('./routes/contentRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const questionRoutes = require('./routes/questionRoutes');
const examRoutes = require('./routes/examRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON




app.use('/api/users', usersRoutes);
app.use('/api/permissions', permissionRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/showImages', express.static('images'));
app.use('/api/videos', videoRoutes);
app.use('/api/showVideos', express.static('videos'));
app.use('/api/lessons', lessonRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/questions', questionRoutes );
app.use('/api/exams', examRoutes );

// Serve images in Directory named images


// Mount the academic year routes

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));





// Image Upload
  // Serve images in Directory named images
app.use(express.static('images'));
app.use(express.static('videos'));

