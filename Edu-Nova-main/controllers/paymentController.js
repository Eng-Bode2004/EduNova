const PaymentService = require('../services/paymentService');

class PaymentController {
  // Create a new payment
  async createPayment(req, res) {
    try {
      const payment = await PaymentService.createPayment(req.body);
      res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all payments
  async getAllPayments(req, res) {
    try {
      const payments = await PaymentService.getAllPayments();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get payment by ID
  async getPaymentById(req, res) {
    try {
      const payment = await PaymentService.getPaymentById(req.params.id);
      if (!payment) {
        return res.status(404).json({ message: 'Payment not found' });
      }
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Complete a payment and enroll the user in the course
  async completePayment(req, res) {
    try {
      const payment = await PaymentService.completePayment(req.params.id);
      res.status(200).json({ message: 'Payment completed and user enrolled in course', payment });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete payment
  async deletePayment(req, res) {
    try {
      await PaymentService.deletePayment(req.params.id);
      res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PaymentController();
