var express = require('express');
var router = express.Router();
const controllerIndex = require('../controllers/controllerIndex');

/* GET home page. */
router.get('/', controllerIndex.index)

module.exports = router;
