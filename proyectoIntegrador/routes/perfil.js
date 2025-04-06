const express = require('express')
const router = express.Router()
const controllerPerfil = require('../controllers/controllerPerfil')

router.get('/', controllerPerfil.index)


module.exports = router