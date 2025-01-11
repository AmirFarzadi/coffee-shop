const express = require("express");
const router = express.Router();
const authRouter = require("./auth/index");
const productsRouter = require("./products/index");
const categoriesRouter = require("./categories/index");

router.use("/auth", authRouter);
router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
