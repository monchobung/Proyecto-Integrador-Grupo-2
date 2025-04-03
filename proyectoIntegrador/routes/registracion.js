const express = require('express')
const router = express.Router()
const controllerRegistracion = require('../controllers/controllerRegistracion')

router.get('/', controllerRegistracion.index)


module.exports = router