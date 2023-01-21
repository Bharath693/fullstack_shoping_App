const jwt = require('jsonwebtoken');
const env = require('../config/envConfig');

const Authorized = (req,res,next) =>{
    let headerToken = req.headers.authorization;
    if(headerToken) {
      const tokenVerify = headerToken.split(" ")[1];
      console.log(tokenVerify);
      const token = headerToken.split(" ")[1];
      const verify = jwt.verify(token,env.JWT_SECRET_KEY);
      if(verify){
        next();
      }else{
        res.status(401).json({msg:"unauthorized access"})
      }
    }else{
        res.status(401).json({msg:"unauthorized access"})
    }
}

module.exports = {Authorized}