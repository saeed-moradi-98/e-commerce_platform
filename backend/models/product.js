const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  images: [{ type: String }],
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  reviews: [reviewSchema],
  specifications: [{
    key: String,
    value: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);