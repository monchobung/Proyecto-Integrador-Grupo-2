const express = require('express')
const router = express.Router()
const controllerProducto = require('../controllers/controllerProducto')

router.get('/', controllerProducto.index)


module.exports = router