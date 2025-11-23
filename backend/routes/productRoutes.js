const express = require('express');
const router = express.Router();
const { 
  getProducts, 
  getProductById, 
  createProduct,
  createReview 
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/auth');

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);
router.route('/:id/reviews').post(protect, createReview);

module.exports = router;