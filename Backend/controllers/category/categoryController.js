const validationResult = require('express-validator');
const categoryModel = require('../../models/Category')

module.exports.category = async (req,res) =>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
         const { name } = req.body;
         const category = await categoryModel.findOne({name});
         if(category){
            res.status()
         }
    }else{
       res.status(401).json({errors:errors.array()})
    }
}