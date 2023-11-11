const express = require('express')
const router = express.Router()
const eventsCtrl = require('./events.controller')
const authVerify = require('../../middlewares/authVerify')

router.post('/', authVerify, eventsCtrl.create)
router.get('/', eventsCtrl.getAll) // events/
router.get('/:id', eventsCtrl.getOne) // events/8988337633

module.exports = router
