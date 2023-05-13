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
    
    upload(req, res, (err) => {
    if (err) {
        console.error(err);
        res.status(500).send('Error uploading file');
      } else {
        console.log(req.headers, "headers");
        // console.log(req);
        res.send('File uploaded successfully');
      }
    });
};
