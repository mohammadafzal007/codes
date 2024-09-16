import express from 'express';
import dotenv from 'dotenv';
import { signup } from '../controllers/user.controllers.js';
import { login } from '../controllers/user.controllers.js';
import User from '../model/user.model.js';
import jwt from "jsonwebtoken"
dotenv.config()
const JWT_SECRET=process.env.JWT_SECRET;

const router=express.Router();

router.post('/signup',signup);
router.post('/login',login);



const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    jwt.verify(token,JWT_SECRET, (err, user) => {
        if (err) {
            console.log("token not valid")
            return res.status(403).json({ msg: 'Token is not valid' });
        }
        req.user = user; // Store user info in request object
        next(); // Proceed to the next middleware or route handler
    });
};


router.get('/profile',verifyToken,async(req,res)=>{
    try {
        const email = req.user.email; // Extract user ID from the verified token
        const user = await User.findOne({email}); // Fetch user from the database

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        // const data=res.json(user); // Send user profile data
        // console.log(data)
        return res.json(user)
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
});

export default router;



