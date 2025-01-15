const express = require('express');
const { addToCart, updateCartItem, removeFromCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addToCart);
router.put('/:id', protect, updateCartItem);
router.delete('/:id', protect, removeFromCart);

module.exports = router;
