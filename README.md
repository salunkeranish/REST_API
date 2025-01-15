ShoppyGlobe Backend

This project is the backend service for the ShoppyGlobe e-commerce application. It is built using Node.js, Express, and MongoDB, and provides RESTful APIs for managing products, user authentication, and shopping cart operations.

Features

Product Management:

Fetch all products

Fetch a single product by ID

Add new products

Update product details

Delete products

Cart Management:

Add products to the cart

Update product quantities in the cart

Remove products from the cart

User Authentication:

Register new users

Login users and generate JWT tokens

Protect routes using authentication middleware

Error Handling & Validation:

Comprehensive error handling for all routes

Input validation for API requests

Technologies Used

Node.js: Runtime environment for JavaScript

Express.js: Web framework for building APIs

MongoDB: NoSQL database for data storage

Mongoose: ODM library for MongoDB

JWT: For authentication and securing routes

Setup Instructions

Prerequisites

Install Node.js and npm.

Install MongoDB and ensure it is running.

Clone this repository:git clone https://github.com/your-username/shoppyglobe-backend.git
cd shoppyglobe-backend

Environment Variables

Create a .env file in the root directory and add the following:PORT=5000
MONGO_URI=mongodb://localhost:27017/shoppyglobe
JWT_SECRET=your_jwt_secret_key

Install Dependencies

Run the following command to install required dependencies:npm install

Start the Server

To start the server in development mode:npm start,node server.js