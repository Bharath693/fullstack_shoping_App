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
      // console.log(req.file.path,"18");
    if (err) {
        res.status(500).send('Error uploading file');
      } else {
        const errors = validationResult(req.body.title)
        if(errors.isEmpty()) {
            const productList = new ProductModel({
              title:req.body.title,
              price:req.body.price,
              discount:req.body.dicount,
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
