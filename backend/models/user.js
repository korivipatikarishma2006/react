const mongoose = require('mongoose');
const User= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    mobile:{
        type:Number
    },
    adress:{
        type:String
    }  
})   
module.exports=mongoose.model("User",User) 