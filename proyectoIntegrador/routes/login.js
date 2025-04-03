const express = require('express')
const router = express.Router()
const controllerLogin = require('../controllers/controllerLogin')

router.get('/', controllerLogin.index)


module.exports = router