const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controllerProducto');

router.get('/', controllerProducto.index); 
router.get('/perfil', controllerProducto.perfil); 
router.get('/productadd', controllerProducto.productadd); 
router.get('/detalle/id/:id', controllerProducto.detalle);


module.exports = router;
