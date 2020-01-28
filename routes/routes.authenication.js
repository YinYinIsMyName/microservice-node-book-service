const {authenticationConroller} = require('../controllers')
const express = require('express')
const route = express.Router()

route.post('/login',authenticationConroller.login)
module.exports = route