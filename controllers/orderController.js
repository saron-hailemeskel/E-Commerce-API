import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

// Create an order from the user's cart
export const createOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    // Check if userId was provided
    if (!userId) {
      return res.status(400).json({
        message: "userId is required",
      });
    }

    // Check if user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Find the user's cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    // Make sure the cart is not empty
    if (cart.items.length === 0) {
      return res.status(400).json({
        message: "Cannot create an order from an empty cart",
      });
    }

    let totalPrice = 0;

    // Store the order items
    const orderItems = [];

    // Go through every item in the cart
    for (const item of cart.items) {
      const product = await Product.findById(item.product);

      // Make sure the product still exists
      if (!product) {
        return res.status(404).json({
          message: `Product ${item.product} not found`,
        });
      }

      // Calculate item total
      const itemTotal = product.price * item.quantity;

      // Add to order total
      totalPrice += itemTotal;

      // Add product and quantity to order
      orderItems.push({
        product: product._id,
        quantity: item.quantity,
      });
    }

    // Create the order
    const order = await Order.create({
      user: userId,
      items: orderItems,
      totalPrice,
    });

    // Clear the cart after creating the order
    cart.items = [];

    await cart.save();

    // Return the created order
    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get all orders for a specific user
export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Find all orders belonging to the user
    const orders = await Order.find({ user: userId })
      .populate("items.product");

    res.status(200).json({
      message: "Orders retrieved successfully",
      orders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};