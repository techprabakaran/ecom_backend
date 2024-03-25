const express = require('express')
const orderController = require('../controllers/orderController')
const  authMiddleware = require('../middlewares/authMiddleware')

const orderRoutes = express.Router()
orderRoutes.post('/add-order', authMiddleware.authUser, orderController.createOrder)
orderRoutes.get('/list', authMiddleware.authUser, orderController.getAll)

module.exports = orderRoutes
