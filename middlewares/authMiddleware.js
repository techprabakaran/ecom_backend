const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');

const authUser = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await userModel.findById(decoded.id).select('-password')
      if(!req.user){
        return res.json({status: false,message : "Not authorized", data : null})
      }
      next()
    } catch (error) {
        console.log(error)
        res.json({status: false,message : "Not authorized", data : null})
    }
  }

  if (!token) {
    res.json({status: false,message : "Not authorised, no token", data : null})
  }
})

module.exports = { authUser }
