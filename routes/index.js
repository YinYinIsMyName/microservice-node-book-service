const express = require('express')
const authenticationRouter = require('./routes.authenication')
const bookRouter = require('./routes.book')
const route = express.Router()

route.use('/auth',authenticationRouter)
route.use('/book',bookRouter)

module.exports = route