const ProductModel = require('../../models/Products')

module.exports.getHomepageProducts = async (req,res) =>{
    const {name,page = 1} = req.params;
    try {
        if(name) {
            let products = await ProductModel.find({})
            if(products.length > 0) {
                let categoryProducts  = products.map((item) =>{
                     if(name.toLowerCase() === item.category.toLowerCase() && Number(item.stock) > 0) {
                         return item
                     }
                })
               res.status(200).json({HomeProducts: categoryProducts})
            }else{
                res.status(400).json({msg: "error in fetching the homeProducts"})
            }
        }else{
            res.status(400).json({msg:"Products not found"})
        }
    } catch (error) {
        res.status(500).json({msg:"internal server error"})
    }
}

module.exports.getHomeProductDetails = async (req, res) =>{
  let id = req.params.id;
    try {
        if(id) {
            let productDetails = await ProductModel.findOne({_id:id})
            res.status(200).json({ProductDetails:productDetails})
        }else{
           res.status(400).json({msg:"ProductDetails not found"})
        } 
    } catch (error) {
        res.status(400).json({error:error})
    } 
}