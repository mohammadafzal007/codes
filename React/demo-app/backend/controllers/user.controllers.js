import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User Already Exists" });
        }
        const hashpassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            name: name,
            email: email,
            password: hashpassword,
        });
        await createdUser.save();
        res.status(201).json({ message: "User Created Successfully" ,user:{
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
    
        }})

    } catch (error) {
        console.log("Error:signup ",error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }

};