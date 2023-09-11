const express = require("express");
const userRoute = require("./user.route.js");
const categoryRoute = require("./category.route.js");
const productRoute = require("./product.route.js");
const subcategoryRoute = require("./subcategory.route.js");
const subchildcategoryRoute = require("./subchildcategory.route.js");
const orderRoute = require("./order.route.js");
const cartRoute = require("./cart.route.js");



const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/subcategory", subcategoryRoute);
router.use("/subchildcategory", subchildcategoryRoute);
router.use("/order", orderRoute);
router.use("/cart", cartRoute);


module.exports = router;