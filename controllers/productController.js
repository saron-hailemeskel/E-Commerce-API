import Product from "../models/Product.js";
//create
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
//get
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//get by id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

};
//update
export const updateProduct= async(req,res)=>{

    try{
      const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      //Return the updated document and Return the updated document.
      {
        returnDocument: "after",
        runValidators: true,
      }
    );


    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
      res.status(200).json(product);
    }

    catch(error){
       res.status(400).json({
      message: error.message,
    });
    }
};
//delete
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};