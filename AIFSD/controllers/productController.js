// const Product = require("./model/product.js");
const Product = require("../model/product");

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};

exports.searchProduct = async (req, res, next) => {
  try {
    const name = req.query.name;

    const products = await Product.find({
      productName: { $regex: name, $options: "i" },
    });

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.filterCategory = async (req, res, next) => {
  try {
    const cat = req.query.cat;

    const products = await Product.find({ category: cat });

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
