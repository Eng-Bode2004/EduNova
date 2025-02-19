const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: false, // Optional, in case the payment is not related to a course
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    required: true, // For example, "Credit Card", "PayPal", etc.
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically includes createdAt and updatedAt

module.exports = mongoose.model('Payment', paymentSchema);
