const asyncHandler = require('express-async-handler')
const cartModel = require('../models/cartModel')


const createCart = asyncHandler(async (req, res) => {
  
    req.body.user_id = req.user._id;
    const { ...dataObj } = req.body

    if(dataObj){ // need to put validation here
                
        const cart = await cartModel.create(dataObj);

        if(cart){
            return res
            .status(200)
            .json({ status: true, message: 'Cart Added', data: cart })
        }else{
            return res
            .status(200)
            .json({ status: false, message: 'Some Error Happened', data: null })
        }

    }
        
      
})



const getAll = asyncHandler(async (req, res) => {
                        
    const cart = await cartModel.find({ user_id :  req.user._id, deletedAt: null});

        if(cart){
            return res
            .status(200)
            .json({ status: true, message: 'Cart List', data: cart })
        }else{
            return res
            .status(200)
            .json({ status: false, message: 'Some Error Happened', data: null })
        }
      
})



module.exports = {
    createCart,
    getAll
}
