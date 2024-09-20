const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },      // For registration and unique identity
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    resetPasswordToken: String,    // Optional, for password reset
    resetPasswordExpire: Date,     // Optional, for password reset expiration
});

// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   });
  
//   UserSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
//     };
  

module.exports = mongoose.model('User', UserSchema);
