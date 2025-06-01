const mongoose = require('mongoose');
const Product = require('./models/product');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/flipkartclone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');

  // Sample product data
  const sampleProducts = [
    {
      name: 'Samsung Galaxy M14',
      price: 12999,
      image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/q/z/x/-original-imagzjhwtfthcmzz.jpeg'
    },
    {
      name: 'Realme Narzo 60',
      price: 14999,
      image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/2/t/o/-original-imagstk2hzuthztu.jpeg'
    },
    {
      name: 'iPhone 14 Pro',
      price: 129999,
      image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/a/t/-original-imaghxen343tbjgj.jpeg'
    }
  ];

  // Insert sample data
  await Product.insertMany(sampleProducts);
  console.log('Sample products inserted!');

  mongoose.disconnect();
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
