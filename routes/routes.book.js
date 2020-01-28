const express = require('express')
const {BookController} = require('../controllers')
const route = express.Router()

route.post('/addbook',BookController.addBook)
route.get('/allbooks',BookController.getAllBooks)
route.get('/getbooks',BookController.getBookById)
module.exports = route