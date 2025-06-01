require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product'); // adjust if needed


const MONGO_URI = "mongodb+srv://gayathrivemula:MongoDB2005@cluster0.7ill7hc.mongodb.net/flipkartclone?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');

    await Product.deleteMany({}); // Clear old data

    const products = [
      {
        name: "iPhone 14 Pro Max",
        image: "https://example.com/iphone.jpg",
        price: 129999
      },
      {
        name: "Samsung Galaxy S23 Ultra",
        image: "https://example.com/samsung.jpg",
        price: 119999
      },
      {
        name: "MacBook Air M2",
        image: "https://example.com/macbook.jpg",
        price: 114999
      }
    ];

    await Product.insertMany(products);
    console.log("Sample products added!");
    process.exit();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
