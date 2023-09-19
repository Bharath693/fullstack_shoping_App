const { validationResult } = require("express-validator");
const ProductModel = require("../../models/Products");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

module.exports.createProduct = async (req, res) => {
    upload(req, res, async (err) => {
    if (err) {
        res.status(500).send('Error uploading file');
      } else {
        const errors = validationResult(req.body.title);
        if(errors.isEmpty()) {
            const productList = new ProductModel({
              title:req.body.title,
              price:req.body.price,
              discount:req.body.discount,
              stock:req.body.stock,
              category:req.body.category,
              color:req.body.color,
              size:req.body.size,
              image:req.file.path,
              description:req.body.description
            })
            try {
              let product = await ProductModel.create(productList);
              res.status(200).json({msg:"Product created succesfully"})
            } catch (error) {
              console.log(error)
              res.status(400).json({msg: error})
            }
        }else{
          res.status(400).json({ errors: errors.array() });
        }
        res.status('File uploaded successfully');
      }
    });
};

module.exports.getProducts = async (req, res) =>{
  let page = req.params;
  const postPerPage = 5;
  const skip = (page - 1) * postPerPage;
  try {
    const count = await ProductModel.find().countDocuments();
    const response = await ProductModel
      .find()
      .skip(skip)
      .limit(postPerPage)
      .sort({ updatedAt: -1 });
    res.status(200).json({ products: response, postPerPage, count });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports.getProduct = async (req, res) => {
   let productId = req.params;
   try {
        let product = await ProductModel.findOne({_id: productId.id}).select(['-image']);
        res.status(200).json(product)
   } catch (error) {
     res.status(500).json({error:error})
   }
}

module.exports.updateProductById = async (req, res) =>{
  let { id } = req.params;
  let { title, price, discount, stock, category, color, size, description} = req.body
  console.log(req.body)
  try {
       await ProductModel.updateOne({id}, {$set :{ title, price, discount, stock, category, color, size, description}});
       res.status(200).json({ msg: "Product updated succesfully !"})
       //the above UpdateOne inbuilt function resolved the entire below code
       
    // let Product = await ProductModel.findById(productId.id).select(['-image']);
      // Product.title = updateUser.title ? updateUser.title : Product.title
      // Product.price = updateUser.price ? updateUser.price : Product.price
      // Product.discount = updateUser.discount ? updateUser.discount : Product.discount
      // Product.stock = updateUser.stock ? updateUser.stock : Product.stock
      // Product.category = updateUser.category ? updateUser.category : Product.category
      // Product.color = updateUser.color ? updateUser.color : Product.color
      // Product.size = updateUser.size ? updateUser.size : Product.size
      // Product.image = Product.image
      // Product.description = updateUser.description ? updateUser.description : Product.description
      // Product.save();
      // res.status(200).json({msg:"Product Updated succesfully"})
  } catch (error) {
     res.status(400).json({msg:error})
  }
}

module.exports.deleteProductById = async (req, res) =>{
     let id = req.params;
     try {
        await ProductModel.findByIdAndDelete(id.id);
        res.status(200).json({msg:"Product deleted succesfully"})
     } catch (error) {
        res.status(400).json({msg:error})
     }
}
