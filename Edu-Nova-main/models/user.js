const mongoose = require('mongoose');
const { isStrongPassword } = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');


const userSchema = new mongoose.Schema({
  
    firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate : {
        validator : isEmail, // Use the custom email validator
        message: props => `${props.value} is not a valid email!`,
      },
  },

  password: {
    type: String,
    required: true,
    validate : {
        validator: isStrongPassword, // Use the custom email validator
        message: props => `${props.value} is not a Strong Password!`,
      },
  },

  confirmPassword: {
    type: String,
    required: true,
},

  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },

  enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  progress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Progress',
    },
  ],
  profilePicture: {
    type: String,
    default: null, // Default value if no image is uploaded
  },


}, 
{ timestamps: true });

module.exports = mongoose.model('User', userSchema);
