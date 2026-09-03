import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",

  info: {
    title: "E-Commerce API",
    version: "1.0.0",
    description:
      "A simple e-commerce backend REST API built with Node.js, Express.js, MongoDB, and Mongoose.",
  },

  servers: [
    {
      url: "http://localhost:5000",
      description: "Local development server",
    },
  ],

  tags: [
    {
      name: "Products",
      description: "Product management endpoints",
    },
    {
      name: "Users",
      description: "User registration and authentication endpoints",
    },
    {
      name: "Cart",
      description: "Shopping cart management endpoints",
    },
    {
      name: "Orders",
      description: "Order creation and order history endpoints",
    },
  ],

  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "6a99a2bd31908c8fe72d5414",
          },
          name: {
            type: "string",
            example: "Gaming Laptop",
          },
          price: {
            type: "number",
            example: 1200,
          },
          description: {
            type: "string",
            example: "High-performance gaming laptop",
          },
          category: {
            type: "string",
            example: "Electronics",
          },
          inStock: {
            type: "boolean",
            example: true,
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },

      User: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "6a99a31431908c8fe72d5416",
          },
          name: {
            type: "string",
            example: "Test Customer",
          },
          email: {
            type: "string",
            format: "email",
            example: "testcustomer@example.com",
          },
          password: {
            type: "string",
            example: "password123",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },

      CartItem: {
        type: "object",
        properties: {
          product: {
            type: "string",
            example: "6a99a2bd31908c8fe72d5414",
          },
          quantity: {
            type: "integer",
            minimum: 1,
            example: 2,
          },
        },
      },

      Cart: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "6a99a50031908c8fe72d5417",
          },
          user: {
            type: "string",
            example: "6a99a31431908c8fe72d5416",
          },
          items: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CartItem",
            },
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },

      OrderItem: {
        type: "object",
        properties: {
          product: {
            type: "string",
            example: "6a99a2bd31908c8fe72d5414",
          },
          quantity: {
            type: "integer",
            minimum: 1,
            example: 2,
          },
        },
      },

      Order: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "6a99a70031908c8fe72d5418",
          },
          user: {
            type: "string",
            example: "6a99a31431908c8fe72d5416",
          },
          items: {
            type: "array",
            items: {
              $ref: "#/components/schemas/OrderItem",
            },
          },
          totalPrice: {
            type: "number",
            example: 2475,
          },
          status: {
            type: "string",
            example: "pending",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },
    },
  },
};

const options = {
  definition: swaggerDefinition,

  apis: [
    "./routes/*.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;