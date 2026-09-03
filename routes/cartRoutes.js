import express from "express";

import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartController.js";

const router = express.Router();

/**
 * @swagger
 * /api/cart/{userId}:
 *   get:
 *     summary: Get a user's cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User cart retrieved successfully
 *       404:
 *         description: Cart not found
 */
router.get("/:userId", getCart);

/**
 * @swagger
 * /api/cart/add:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - productId
 *               - quantity
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 6a99a31431908c8fe72d5416
 *               productId:
 *                 type: string
 *                 example: 6a99a2bd31908c8fe72d5414
 *               quantity:
 *                 type: integer
 *                 minimum: 1
 *                 example: 2
 *     responses:
 *       200:
 *         description: Product added to cart
 *       404:
 *         description: Product not found
 */
router.post("/add", addToCart);

/**
 * @swagger
 * /api/cart/remove:
 *   post:
 *     summary: Remove a product from the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - productId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 6a99a31431908c8fe72d5416
 *               productId:
 *                 type: string
 *                 example: 6a99a2bd31908c8fe72d5414
 *     responses:
 *       200:
 *         description: Product removed from cart
 *       404:
 *         description: Product not found in cart
 */
router.post("/remove", removeFromCart);

export default router;