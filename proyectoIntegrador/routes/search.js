const express = require('express')
const router = express.Router()
const controllerSearch = require('../controllers/controllerSearch')

router.get('/', controllerSearch.index)


module.exports = router