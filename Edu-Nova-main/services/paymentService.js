const PaymentModel = require('../models/payment');
const CourseModel = require('../models/course');
const UserModel = require('../models/user');

class PaymentService {
  // Create a new payment
  async createPayment(paymentData) {
    const payment = new PaymentModel(paymentData);
    return await payment.save();
  }

  // Get all payments
  async getAllPayments() {
    return await PaymentModel.find()
      .populate('user')
      .populate('course');
  }

  // Get payment by ID
  async getPaymentById(id) {
    return await PaymentModel.findById(id)
      .populate('user')
      .populate('course');
  }

  // Mark payment as completed and enroll the user in the course
  async completePayment(paymentId) {
    const payment = await PaymentModel.findById(paymentId);
    if (!payment) {
      throw new Error('Payment not found');
    }

    if (payment.status === 'completed') {
      throw new Error('Payment has already been completed');
    }

    // Update payment status
    payment.status = 'completed';
    await payment.save();

    // Enroll user in the course if the payment is related to a course
    if (payment.course) {
      const user = await UserModel.findById(payment.user);
      const course = await CourseModel.findById(payment.course);

      if (!user || !course) {
        throw new Error('User or Course not found');
      }

      // Enroll the user by adding the course to their enrolledCourses array
      user.enrolledCourses.push(course._id);
      await user.save();
    }

    return payment;
  }

  // Delete a payment
  async deletePayment(id) {
    return await PaymentModel.findByIdAndDelete(id);
  }
}

module.exports = new PaymentService();
