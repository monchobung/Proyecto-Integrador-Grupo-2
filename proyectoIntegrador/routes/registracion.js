const express = require('express')
const router = express.Router()
const controllerRegistracion = require('../controllers/controllerRegistracion')

router.get('/', ControllerRegistracion.index)


module.exports = router