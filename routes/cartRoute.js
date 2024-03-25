const express = require('express')
const cartController = require('../controllers/cartController')
const  authMiddleware = require('../middlewares/authMiddleware')

const cartRoutes = express.Router()
cartRoutes.post('/add-to-cart', authMiddleware.authUser, cartController.createCart)
cartRoutes.get('/list', authMiddleware.authUser, cartController.getAll)

module.exports = cartRoutes
