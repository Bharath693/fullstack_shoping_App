const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const env = require('../config/envConfig');

module.exports.hashedPassword = async (password) =>{
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password,salt);
  return hash;
}

module.exports.comparePassword = async (password, dbPassword) =>{
 return await bcrypt.compare(password,dbPassword)
}

module.exports.createToken = (user) =>{
 return jwt.sign({id:user._id,name:user.name},env.JWT_SECRET_KEY,{
    expiresIn: "7d"
  })
}