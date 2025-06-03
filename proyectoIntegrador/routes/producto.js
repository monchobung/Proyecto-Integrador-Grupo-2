const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controllerProducto');


router.get('/detalle/:id', controllerProducto.detalle);
router.get('/perfil/:id', controllerProducto.perfil);
router.get('/productadd', controllerProducto.productadd);
router.post('/productadd', controllerProducto.guardar);
router.post('/:id/comentario', controllerProducto.agregar_comentario);


module.exports = router