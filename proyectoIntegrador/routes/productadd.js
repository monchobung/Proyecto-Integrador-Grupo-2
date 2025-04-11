const express = require('express')
const router = express.Router()
const controllerProductadd = require('../controllers/controllerProductadd')

router.get('/', controllerProductadd.index)


module.exports = router