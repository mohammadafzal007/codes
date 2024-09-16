import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        required:true,
        type:String
    }
})

const User=mongoose.model("usersdemo",userSchema)

export default User;