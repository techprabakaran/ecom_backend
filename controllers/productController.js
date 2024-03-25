const asyncHandler = require('express-async-handler')
const productModel = require('../models/productModel')


const createProduct = asyncHandler(async (req, res) => {
  
    const { ...dataObj } = req.body

    if(dataObj){ // need to put validation here
                
        const product = await productModel.create(dataObj);

        if(product){
            return res
            .status(200)
            .json({ status: true, message: 'Product Added', data: product })
        }else{
            return res
            .status(200)
            .json({ status: false, message: 'Some Error Happened', data: null })
        }

    }
        
      
})



const getAll = asyncHandler(async (req, res) => {
                        
    const product = await productModel.find({deletedAt: null});

        if(product){
            return res
            .status(200)
            .json({ status: true, message: 'Product List', data: product })
        }else{
            return res
            .status(200)
            .json({ status: false, message: 'Some Error Happened', data: null })
        }
      
})



module.exports = {
    createProduct,
    getAll
}
