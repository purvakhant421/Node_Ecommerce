const { subcategoryService } = require("../services");

/** create subcategory */
const createSubcategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subcategory = await subcategoryService.createSubcategory(reqBody);
    if (!subcategory) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Subcategory create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get subcategory list */
const getSubcategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Subcategory_name: { $regex: search, $options: "i" } },
        { Subcategory_number : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await subcategoryService.getSubcategoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get subcategory list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete subcategory */
const deleteSubcategory = async (req, res) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const subcategoryExists = await subcategoryService.getSubcategoryById(subcategoryId);
    if (!subcategoryExists) {
      throw new Error("Subcategory not found!");
    }
    await subcategoryService.deleteSubcategory(subcategoryId);

    res.status(200).json({
      success: true,
      message: "Subcategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update subcategory */
const updateSubcategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subcategoryId = req.params.subcategoryId;
    const subcategoryExists = await subcategoryService.getSubcategoryById(subcategoryId);
    if (!subcategoryExists) {
      throw new Error("Subcategory not found!");
    }
    await subcategoryService.updateDetails(subcategoryId,reqBody);

    res.status(200).json({
      success: true,
      message: "Subcategory update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createSubcategory,
  getSubcategoryList,
  deleteSubcategory,
  updateSubcategory
};