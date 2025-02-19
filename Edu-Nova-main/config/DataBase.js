//  MongoDB Atlas Informations
// Account email-username : zezomodebode@gmail.com
// Account password : Zzz123123@#!@!#
// Project name : edunova-Project
// Cluster name : eduNova-Cluster
// Cluster User name : eduNova
// Cluster Password : zezomodebode123eduNova

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://eduNova:zezomodebode123eduNova@edunova-cluster.q1kkr.mongodb.net/?retryWrites=true&w=majority&appName=eduNova-Cluster';

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.error('MongoDB Connection error:', error);
  });

module.exports = mongoose;
