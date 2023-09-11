const { subchildcategoryService } = require("../services");

/** create subcategory */
const createSubchildcategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subchildcategory = await subchildcategoryService.createSubchildcategory(reqBody);
    if (!subchildcategory) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Subchildcategory create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get subchildcategory list */
const getSubchildcategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Subchildcategory_name: { $regex: search, $options: "i" } },
        { Subchildcategory_number : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await subchildcategoryService.getSubchildcategoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get subchildcategory list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete subchildcategory */
const deleteSubchildcategory = async (req, res) => {
  try {
    const subchildcategoryId = req.params.subchildcategoryId;
    const subchildcategoryExists = await subchildcategoryService.getSubchildcategoryById(subchildcategoryId);
    if (!subchildcategoryExists) {
      throw new Error("Subchildcategory not found!");
    }
    await subchildcategoryService.deleteSubchildcategory(subchildcategoryId);

    res.status(200).json({
      success: true,
      message: "Subchildcategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update subchildcategory */
const updateSubchildcategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subchildcategoryId = req.params.subchildcategoryId;
    const subchildcategoryExists = await subchildcategoryService.getSubchildcategoryById(subchildcategoryId);
    if (!subchildcategoryExists) {
      throw new Error("Subchildcategory not found!");
    }
    await subchildcategoryService.updateDetails(subchildcategoryId,reqBody);

    res.status(200).json({
      success: true,
      message: "Subchildcategory update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createSubchildcategory,
  getSubchildcategoryList,
  deleteSubchildcategory,
  updateSubchildcategory
};