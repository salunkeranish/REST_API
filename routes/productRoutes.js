// routes/products.js

const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET route to fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products); // Return the products in the response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
});


// GET route to fetch a single product by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params; // Get product ID from the URL

  try {
    const product = await Product.findById(id); // Find the product by its ID

    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // If product is not found, return 404
    }

    res.status(200).json(product); // Return the product
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching product', error: err });
  }
});

// POST route to add a new product
router.post('/', async (req, res) => {
  const { name, price, description, stock, category = '', imageUrl = '' } = req.body; // category and imageUrl default to empty strings

  if (!name || !price || !description || !stock) {
    return res.status(400).json({ message: 'Missing required fields: name, price, description, and stock.' });
  }

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      stock,  // Ensure stock is included
      category,  // Optional, defaults to an empty string
      imageUrl,  // Optional, defaults to an empty string
    });
    
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);  // For debugging purposes
    res.status(500).json({ message: 'Error adding product', error: err });
  }
});

module.exports = router;
