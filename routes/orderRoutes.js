import express from "express";

import {
  createOrder,
  getUserOrders,
} from "../controllers/orderController.js";

const router = express.Router();

// Create an order from the user's cart
router.post("/", createOrder);

// Get all orders for a specific user
router.get("/:userId", getUserOrders);

export default router;