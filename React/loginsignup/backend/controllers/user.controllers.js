import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET=process.env.JWT_SECRET;
//signup controller 
export const signup = async (req, res) => {
    try {

        //get data from body
        const { name, email, password } = req.body;
        const user =await User.findOne({ email });

        //hashing password
        const hashpassword = await bcryptjs.hash(password, 10);
        //if user already exist
        if (user) {
            return res.status(403).json({ message: "User Already Exist" });
        }
        //create new user
        const newuser = new User({
            name: name,
            email: email,
            password: hashpassword
        })

        //save new user to db
        await newuser.save();
        

        //after successfully created newuser
        return res.status(201).json(
            {
                message: "User Created Successfully",
                user: {
                    _id: newuser._id,
                    name: newuser.name,
                    email: newuser.email
                }
            });
            console.log("user Created  Successfully")
    }
    catch (error) {
res.status(500).json({message:"Internal Server Error"})
console.log("Signup Error ",error)
    }
}



export const login=async (req,res)=>{
try{
const {email,password}=req.body;
const user=await User.findOne({email});
if(!user)
    {
        console.log("invalid user")
        return res.status(404).json({message:"Invalid email or password "})
    }
    const ismatchpassword=await bcryptjs.compare(password,user.password);
if(!ismatchpassword )
{
    console.log("invalid password")
    return res.status(404).json({message:"Invalid email or password "})
}
const userinfo={
    id:user._id,
    name:user.name,
    email:user.email,
}
const token=jwt.sign(userinfo,JWT_SECRET,{expiresIn:'1h'})

console.log("login Successfully")
return res.status(200).json(
    {message:"User Login Successfully",
    user:{
        _id:user._id,
        name:user.name,
        email:user.email,
    },token
})
}
catch(error)
{
    console.error("Error during login:", error);
res.status(500).json({message:"Internal Server Eror"})
}
}



// export const getprofile=async (verifyToken,next)=>{
    
// }