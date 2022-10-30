const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name:{
        requied:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    admin:{
        required:true,
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("user",userScheme)