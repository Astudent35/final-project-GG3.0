const express = require('express');
const router = express.Router();
const { getProducts, createProduct, searchProduct } = require("../controller/productController");

router.get("/:vId", getProducts);
router.get("/:vId/search", searchProduct);
router.post("/", createProduct);
module.exports = router;