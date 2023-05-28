const { validationResult } = require("express-validator");
const ProductModel = require("../../models/Products");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/images/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image1");

module.exports.createProduct = async (req, res) => {
    
    upload(req, res, async (err) => {
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
              image1:req.body.image1,
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
