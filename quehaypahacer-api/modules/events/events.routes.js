const express = require('express')
const router = express.Router()
const eventsCtrl = require('./events.controller')

router.post('/', eventsCtrl.create)
router.get('/', eventsCtrl.getAll) // events/
router.get('/:id', eventsCtrl.getOne) // events/8988337633

module.exports = router
