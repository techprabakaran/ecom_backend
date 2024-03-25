const express = require('express')
const productController = require('../controllers/productController')
const  authMiddleware = require('../middlewares/authMiddleware')

const productRoutes = express.Router()
productRoutes.post('/add-product', authMiddleware.authUser , productController.createProduct)
productRoutes.get('/list', authMiddleware.authUser , productController.getAll)

module.exports = productRoutes
