const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const {generateToken} = require('../helper/common')
const bcrypt = require('bcryptjs');


const createUser = asyncHandler(async (req, res) => {
  
    const { ...userData } = req.body

    if(req.body){ // need to put validation here

        const password = userData.password

        // Hash password
        const salt = await bcrypt.genSalt(10)
        userData.password = await bcrypt.hash(password, salt)
                
        const User = await UserModel.create(userData);

        if(User){
            return res
            .status(200)
            .json({ status: true, message: 'User Registered', data: null })
        }else{
            return res
            .status(200)
            .json({ status: false, message: 'Some Error Happened', data: null })
        }

    }
        
      
})


const loginUser = asyncHandler(async (req, res) => {
  
    const { user_name, password } = req.body


    const User = await UserModel.aggregate([{
        $match: {
            $or: [
                {"email": user_name}, 
                {"contact": user_name}
            ]
        }
    }, { $limit: 1 }]);
       
    if(User){

        const matchedUser = User[0];

        if(matchedUser && (await bcrypt.compare(password, matchedUser.password)) ){
            const token = generateToken(matchedUser._id);
            return res
            .status(200)
            .json({ status: true, message: 'Authendicated', data: {token : token } })
        }else{
            return res
            .status(200)
            .json({ status: false, message: 'Please check username and password.', data: null })
        }
        
    }else{
        return res
        .status(200)
        .json({ status: false, message: 'Some Error Happened', data: null })
    }

        
      
})


module.exports = {
    createUser,
    loginUser
}
