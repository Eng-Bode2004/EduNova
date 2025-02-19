const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes configuration
router.post('/', authMiddleware, PaymentController.createPayment); // Create Payment
router.get('/', authMiddleware, PaymentController.getAllPayments); // Get All Payments
router.get('/:id', authMiddleware, PaymentController.getPaymentById); // Get Payment by ID
router.put('/:id/complete', authMiddleware, PaymentController.completePayment); // Complete Payment
router.delete('/:id', authMiddleware, PaymentController.deletePayment); // Delete Payment

module.exports = router;
