const mongoose =  require('mongoose')

const orderModel = mongoose.Schema({
    productId:{type: mongoose.Types.ObjectId, ref:'product'},
    size:{
        required: false,
        type: String
    },
    color:{
        required: false,
        type: String
    },
    quantities:{
        required: true,
        type: Number
    },
    address:{
        required: true,
        type: Map
    }
},{timestampe:true})

module.exports = mongoose.model('OrderDetails',orderModel)