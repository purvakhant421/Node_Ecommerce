const express = require("express");
const { cartValidation } = require("../validations");
const { cartController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create cart */
router.post(
  "/create-cart",
  validate(cartValidation.createCart),
  cartController.createCart
);

/** cart list */
router.get(
  "/list",
  cartController.getCartList
)

router.delete(
  "/delete/:cartId",
  cartController.deleteCart
)

router.put(
  "/update-cart/:cartId",
  cartController.updateCart
)

module.exports = router;