const { validationResult } = require('express-validator');
const categoryModel = require('../../models/Category')

module.exports.createCategory = async (req,res) =>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
         const { name } = req.body;
         const category = await categoryModel.findOne({name});
         if(!category){
            categoryModel.create({name})
            res.status(201).json({msg:"category created succesfully"})
         }else{
            res.status(400).json({errors:[{msg:`${name} category allready exists`}]})
         }
    }else{
      // console.log(errors.array())
       res.status(400).json({errors:errors.array()})
    }
}

module.exports.getCategory = async (req, res) =>{
    const page = req.params.page;
    const postPerPage = 3;
    const skip = (page - 1) * postPerPage;
    try {
      const count = await categoryModel.find().countDocuments();
      const response = await categoryModel.find().skip(skip).limit(postPerPage).sort({updatedAt:-1});
      res.status(200).json({catrgories:response,postPerPage,count});
    } catch (error) {
      res.status(400).json({msg:error.message})
    }
}