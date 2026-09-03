# 🛒 Backend Simple E-Commerce API

A RESTful E-Commerce Backend API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

Nexus provides the backend functionality for a simple e-commerce platform, including product management, user registration and login, shopping carts, and order processing.

The API can be tested using **Postman**, **Thunder Client**, or **Swagger UI**.

---

## 🚀 Features

### 📦 Product Management

- Create a product
- Get all products
- Get a product by ID
- Update a product
- Delete a product

### 👤 User Management

- Register a new user
- Login an existing user
- Prevent duplicate email registration
- Validate required user information

### 🛒 Shopping Cart

- Add products to a user's cart
- Increase quantity when the product already exists
- View a user's cart
- Remove products from a cart
- Maintain a separate cart for each user

### 📋 Order Management

- Create an order from the user's cart
- Calculate the total order price
- Store ordered products and quantities
- Automatically clear the cart after an order is created
- Get all orders belonging to a specific user

### 🗄️ Database

- MongoDB database
- Mongoose ODM
- MongoDB Atlas support
- Relationships between Users, Products, Carts, and Orders

### 📚 API Documentation

- Swagger / OpenAPI documentation
- Interactive Swagger UI
- All major API endpoints documented

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend web framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| dotenv | Environment variable management |
| Swagger | API documentation |
| swagger-jsdoc | Generate OpenAPI specification |
| swagger-ui-express | Serve Swagger UI |
| Postman | API testing |
| Nodemon | Development server |

---

# 📁 Project Structure

```text
E-Commerce-API/
│
├── config/
│   ├── db.js
│   └── swagger.js
│
├── controllers/
│   ├── productController.js
│   ├── userController.js
│   ├── cartController.js
│   └── orderController.js
│
├── models/
│   ├── Product.js
│   ├── User.js
│   ├── Cart.js
│   └── Order.js
│
├── routes/
│   ├── productRoutes.js
│   ├── userRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

#📚 Swagger / OpenAPI Documentation
```
http://localhost:5000/api-docs
```
