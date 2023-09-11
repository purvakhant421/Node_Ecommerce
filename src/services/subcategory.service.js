const { Subcategory } = require("../models");

// subcategory
const createSubcategory = async (reqBody) => {
  return Subcategory.create(reqBody);
};

// Get subcategory list
const getSubcategoryList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Subcategory.find().populate("category");
};

// Get subCategory by name
const getSubcategoryByName = async (subcategory_name) => {
  return Subcategory.findOne({ subcategory_name });
};

// Get Subcategory details by id
const getSubcategoryById = async (subcategoryId) => {
  return Subcategory.findById(subcategoryId);
};

// update subCategory
const updateDetails = async (subcategoryId, reqBody) => {
  return Subcategory.findByIdAndUpdate(subcategoryId, { $set: reqBody });
};

// Delete subcategory
const deleteSubcategory = async (subcategoryId) => {
  return Subcategory.findByIdAndDelete(subcategoryId);
};

module.exports = {
    createSubcategory,
    getSubcategoryList,
    getSubcategoryByName,
    getSubcategoryById,
    updateDetails,
    deleteSubcategory
}