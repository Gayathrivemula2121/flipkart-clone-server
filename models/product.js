const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
}, { collection: 'products' }); // 👈 Force matching collection name

module.exports = mongoose.model('Product', productSchema);
