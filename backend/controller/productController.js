const asyncHandler = require('express-async-handler')
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
    try {
      const { vId } = req.params;
      if (!vId.match(/^[0-9a-fA-F]{24}$/)) {
        throw new Error(
          "cannot find the item"
        );
      }
      const products = await Product.find({
        vId,
      });
      if (products.length === 0) {
        throw new Error(
          "cannot find the item"
        );
      }
      const mappedProducts = products.map((item) => {
        return {
          productID: item._id,
          link: item.link,
          title: item.title,
          price: item.price,
        };
      });
      res.status(200).json(mappedProducts);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })


const createProduct = asyncHandler(async (req, res) => {
    try {
      const { link, title, price, vId } = req.body;
      const product = new Product({ link, title, price, vId });
      await product.save();
      res.status(200).json({
        success: true,
        fail: false,
      });
    } catch (err) {
      res.status(400).json({ success: false, fail: true });
    }
  })

const searchProduct = asyncHandler(async (req, res) => {
    try {
      const { vId } = req.params;
      const { title } = req.query;
      if (!vId.match(/^[0-9a-fA-F]{24}$/)) {
        throw new Error(
          "cannot find the product"
        );
      }
      const product = await Product.find({
        vId,
      });
      const mappedSearchProducts = product
        .filter((item) => {
          return item.title.toLowerCase().match(title.toLowerCase());
        })
        .map((item) => {
          return {
            productID: item._id,
            link: item.link,
            title: item.title,
            price: item.price,
          };
        });

      res.status(200).json(mappedSearchProducts);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })

module.exports = {
    getProducts,
    createProduct,
    searchProduct
};