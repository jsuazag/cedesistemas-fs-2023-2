const express = require('express')
const router = express.Router()
const userCtrl = require('./users.controller')
const authVerify = require('../../middlewares/authVerify')

router.post('/login', userCtrl.login)
router.post('/signup', userCtrl.signup)
router.post('/info', authVerify, userCtrl.info)

module.exports = router
