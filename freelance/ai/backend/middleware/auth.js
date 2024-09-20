const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      console.log('token verified')
      next();
    } catch (err) {
      console.log('token not authorized')
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log('no token')
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = protect;
