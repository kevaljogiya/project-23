const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    repeatpassword:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("LogData",schema);
module.exports = admin;