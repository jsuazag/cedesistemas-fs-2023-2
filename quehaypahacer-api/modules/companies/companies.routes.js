const express = require('express')
const router = express.Router()
const companiesCtrl = require('./companies.controller')

router.post('/', companiesCtrl.create)

module.exports = router
