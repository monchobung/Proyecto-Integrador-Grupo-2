var express = require('express');
var router = express.Router();
const controllerIndex = require('../controllers/controllerIndex');

router.get('/', controllerIndex.index);
router.get('/search', controllerIndex.search);

module.exports = router;
