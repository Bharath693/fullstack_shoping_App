const { validationResult } = require('express-validator');
const UserModel = require('../../models/User');
const bcrypt = require('bcrypt');
const { hashedPassword, createToken, comparePassword } = require("../../services/authServices");


//@route Post /register
//@access public
//@des register use and return a token
module.exports.register = async (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        const { name, email, password } = req.body;
        try {
            const emailExist = await UserModel.findOne({email});
            if(!emailExist){
            const hashPassword = await hashedPassword(password)
            let newUser = await UserModel.create({
                name,
                email,
                password:hashPassword,
            })
           const token = createToken(newUser);
           res.status(200).json({msg:"Account has been created succesfully!",token})
            }else{
                return res.status(401).json({errors:"email already exist"})
            }
        } catch (error) {
            // console.log(error.message)
           return res.status(500).json("internal server error")
        }
    } else {
        // errors.array().forEach((item) =>{
        //     if(item.msg === "email is required"){
        //          return res.status(400).json({status:false, errors: "invalid email" })
        //     }
        // })
        return res.status(400).json({ errors: errors.array() })
    }
}  

//@route Post /login
//@access public
//@des login user and return a token
module.exports.login = async (req,res) =>{
    const { email, password} = req.body;
    const errors = validationResult(req)
    if(errors.isEmpty()){
        try {
            const user = await UserModel.findOne({email})
            if(user){
             if(await comparePassword(password,user.password)){
                 const token = createToken(user);
                 if(user.admin){
                    res.status(200).json({token,admin:true})
                 }else{
                    res.status(200).json({token,admin:false})
                 }
             }else{
                res.status(401).json({msg:"invalid password"})
             }
            }else{
                return res.status(401).json({msg:"email is not found"})
            }
        } catch (error) {
            res.status(500).json({msg:"internal server error"})
        }
       
    }else{
        return res.status(400).json({errors:errors.array()})
    }
    
}
