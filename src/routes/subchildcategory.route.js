const express = require("express");
const { subchildcategoryValidation } = require("../validations");
const { subchildcategoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create subchildcategory */
router.post(
  "/create-subchildcategory",
  validate(subchildcategoryValidation.createSubchildcategory),
  subchildcategoryController.createSubchildcategory
);

/** subchildcategory list */
router.get(
  "/list",
  subchildcategoryController.getSubchildcategoryList
)

router.delete(
  "/delete/:subchildcategoryId",
  subchildcategoryController.deleteSubchildcategory
)

router.put(
  "/update-subchildcategory/:subchildcategoryId",
  subchildcategoryController.updateSubchildcategory
)

module.exports = router;