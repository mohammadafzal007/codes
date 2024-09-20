const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Import crypto
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const questionnaire = require('../models/questionnaire');

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
             return res.status(400).json({ msg: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);


        if (!isMatch) {
             return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token,user:{
            _id:user._id,
            email:user.email,
            firstName:user.firstName,
            lastName:user.lastName,
            phone:user.phone,
            gender:user.gender,
            age:user.age,
        } });
    } catch (error) {
        console.error('Server error:', error.message);
        return res.status(500).json({ msg: 'Server error' });
    }
});


// Registration route
router.post('/register', async (req, res) => {
    const { email, firstName, lastName, phone, gender, age, password, confirmPassword } = req.body;
    
    try {
    
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'Email already exists' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ msg: 'Passwords and Confirm Password  do not match' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            firstName,
            lastName,
            phone,
            gender,
            age,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error); // Log error details
        res.status(500).json({ msg: 'Server error', error: error.message }); // Include error message
    }
});

// Forgot Password Route
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');

        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

        await user.save();

        const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;

        const message = `You have requested a password reset. Please click the following link to reset your password: \n\n${resetUrl}`;

        try {
            await sendEmail({
                email: user.email,
                subject: 'Password Reset Request',
                message,
            });

            res.status(200).json({ msg: 'Email sent' });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            res.status(500).json({ msg: 'Email could not be sent' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;





