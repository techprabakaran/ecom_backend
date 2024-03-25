const asyncHandler = require('express-async-handler')
const orderModel = require('../models/orderModel')


const createOrder = asyncHandler(async (req, res) => {
  
    req.body.user_id = req.user._id;
    const { ...dataObj } = req.body

    if(dataObj){ // need to put validation here
                
        const order = await orderModel.create(dataObj);

        if(order){
            return res
            .status(200)
            .json({ status: true, message: 'Order Added', data: order })
        }else{
            return res
            .status(200)
            .json({ status: false, message: 'Some Error Happened', data: null })
        }

    }
        
      
})



const getAll = asyncHandler(async (req, res) => {
                        
    const order = await orderModel.find({ user_id :  req.user._id, deletedAt: null});

        if(order){
            return res
            .status(200)
            .json({ status: true, message: 'Order List', data: order })
        }else{
            return res
            .status(200)
            .json({ status: false, message: 'Some Error Happened', data: null })
        }
      
})



module.exports = {
    createOrder,
    getAll
}
