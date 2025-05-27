const express = require('express');
const router = express.Router();
const controllerRegistracion = require('../controllers/controllerRegistracion');

router.get('/registro', controllerRegistracion.Registro);
router.get('/login', controllerRegistracion.Login);
router.post('/registro', controllerRegistracion.ProcesarRegistro);

module.exports = router;
