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
      console.log(errors.array())
       res.status(400).json({errors:errors.array()})
    }
}