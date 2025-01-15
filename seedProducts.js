const mongoose = require('mongoose');
const Product = require('./models/productModel'); // Adjust the path if needed
require('dotenv').config();

// Sample products to insert
const products = [
    {
        name: 'Sample Product 1',
        price: 19.99,
        description: 'This is a great product.',
        stockQuantity: 50,
    },
    {
        name: 'Sample Product 2',
        price: 29.99,
        description: 'Another awesome product.',
        stockQuantity: 30,
    },
    {
        name: 'Sample Product 3',
        price: 9.99,
        description: 'Affordable and useful.',
        stockQuantity: 100,
    },
];

// Connect to MongoDB and seed data
const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Delete existing products (optional)
        await Product.deleteMany({});
        console.log('Existing products removed');

        // Insert sample products
        const insertedProducts = await Product.insertMany(products);
        console.log('Products added:', insertedProducts);

        // Exit the process
        process.exit();
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

seedProducts();
