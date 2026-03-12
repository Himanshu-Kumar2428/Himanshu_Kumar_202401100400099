const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProduct,
  filterCategory,
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/search", searchProduct);
router.get("/category", filterCategory);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
