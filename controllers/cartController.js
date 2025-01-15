const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add a product to the cart
const addToCart = async (req, res, next) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            const newCart = new Cart({
                userId: req.user.id,
                items: [{ productId, quantity }],
            });
            await newCart.save();
            return res.status(201).json(newCart);
        }

        const existingItem = cart.items.find(item => item.productId.toString() === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

// Update the quantity of a product in the cart
const updateCartItem = async (req, res, next) => {
    const { id } = req.params;
    const { quantity } = req.body;

    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const item = cart.items.find(item => item.productId.toString() === id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        item.quantity = quantity;
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

// Remove a product from the cart
const removeFromCart = async (req, res, next) => {
    const { id } = req.params;

    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter(item => item.productId.toString() !== id);
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addToCart,
    updateCartItem,
    removeFromCart,
};
