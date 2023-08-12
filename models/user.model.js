const mongoose =require('mongoose')

const productShema = mongoose.Schema({
    name :{
        type:String,
        required:[true,'Product name is required'],
        maxlength:[20,'name length should be less than 20']
    },
    quantity:{
        type:Number,
        required:[true,'quantity not less than 1']
    },
    price:{
        type:Number,
        required:[true,'price required']
    },
    image:{
        type:String,
        required:[false]
    }

},{timestamps:true})

const product = mongoose.model('product',productShema)

//export than other file can  use this data
module.exports = product