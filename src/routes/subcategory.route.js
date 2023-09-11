const express = require("express");
const { subcategoryValidation } = require("../validations");
const { subcategoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create subcategory */
router.post(
  "/create-subcategory",
  validate(subcategoryValidation.createSubcategory),
  subcategoryController.createSubcategory
);

/** subcategory list */
router.get(
  "/list",
  subcategoryController.getSubcategoryList
)

router.delete(
  "/delete/:subcategoryId",
  subcategoryController.deleteSubcategory
)

router.put(
  "/update-subcategory/:subcategoryId",
  subcategoryController.updateSubcategory
)

module.exports = router;