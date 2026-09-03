import express from "express";

import {
  createOrder,
  getUserOrders,
} from "../controllers/orderController.js";

const router = express.Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create an order from the user's cart
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 6a99a31431908c8fe72d5416
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid request or empty cart
 *       404:
 *         description: User, cart, or product not found
 */
router.post("/", createOrder);

/**
 * @swagger
 * /api/orders/{userId}:
 *   get:
 *     summary: Get all orders for a user
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Orders retrieved successfully
 *       404:
 *         description: User not found
 */
router.get("/:userId", getUserOrders);

export default router;