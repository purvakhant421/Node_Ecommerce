const { Subchildcategory } = require("../models");

// subchildcategory
const createSubchildcategory = async (reqBody) => {
  return Subchildcategory.create(reqBody);
};

// Get subchildcategory list
const getSubchildcategoryList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Subchildcategory.find().populate("subcategory");
};

// Get subchildCategory by name
const getSubchildcategoryByName = async (subchildcategory_name) => {
  return Subchildcategory.findOne({ subchildcategory_name });
};

// Get Subchildcategory details by id
const getSubchildcategoryById = async (subchildcategoryId) => {
  return Subchildcategory.findById(subchildcategoryId);
};

// update subchildCategory
const updateDetails = async (subchildcategoryId, reqBody) => {
  return Subchildcategory.findByIdAndUpdate(subchildcategoryId, { $set: reqBody });
};

// Delete subchildcategory
const deleteSubchildcategory = async (subchildcategoryId) => {
  return Subchildcategory.findByIdAndDelete(subchildcategoryId);
};

module.exports = {
    createSubchildcategory,
    getSubchildcategoryList,
    getSubchildcategoryByName,
    getSubchildcategoryById,
    updateDetails,
    deleteSubchildcategory
}