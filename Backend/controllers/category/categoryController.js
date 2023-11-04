const { validationResult } = require("express-validator");
const categoryModel = require("../../models/Category");

module.exports.createCategory = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name } = req.body;
    const category = await categoryModel.findOne({ name });
    if (!category) {
      categoryModel.create({ name });
      res.status(201).json({ msg: "category created succesfully" });
    } else {
      res
        .status(400)
        .json({ errors: [{ msg: `${name} category allready exists` }] });
    }
  } else {
    res.status(400).json({ errors: errors.array() });
  }
};

module.exports.getCategory = async (req, res) => {
  const page = req.params.page;
  const postPerPage = 3;
  const skip = (page - 1) * postPerPage;
  try {
    const count = await categoryModel.find().countDocuments();
    const response = await categoryModel
      .find()
      .skip(skip)
      .limit(postPerPage)
      .sort({ updatedAt: -1 });
    res.status(200).json({ catrgories: response, postPerPage, count });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports.updateCategoryById = async (req, res) => {
  let userId = req.params;
  let updatedName = req.body;
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    let category = await categoryModel.findById(new Object(userId.id));
    let id = category.id.toString();
    if (userId.id === id) {
      category.name = updatedName ? updatedName.name : category.name;
      category.save();
      res.status(201).json({ msg: "Category Updated Successfully !" });
    } else {
      res.status(400).json({msg:"given Id doesn't match to update the category"})
    }
  } else {
    console.log("category doesnot matched");
    res.status(400).json({ msg: "category doesnot matched" });
  }
};

module.exports.deleteCategoryById = async (req,res) =>{
let id = req.params;
let category = await categoryModel.findById(id.id);
let modifiedId = category._id.toString();
if(id.id === modifiedId){
    await categoryModel.findByIdAndDelete(modifiedId);
    res.status(200).json({msg:'category deleted succesfully !'})
}else{
  res.status(400).json({msg:'category Id is not matched to delete the category !'})
}
}

module.exports.allCategories = async (req, res) =>{
  let allCategories = await categoryModel.find();
  try {
     if(allCategories) {
      res.status(200).json({allCategories: allCategories})
     }
  } catch (error) {
      res.status(400).json({msg:"categories not found"})
  }
}

module.exports.randomCategory = async(req,res) =>{
   try {
     let categories = await categoryModel.aggregate([
      {$sample: {size: 3}}
     ])
     return res.status(200).json({categories})
   } catch (error) {
      return res.status(500).json('internal Server error')
   }
}
