const express = require('express');
const router = express.Router();
const controllerRegistracion = require('../controllers/controllerRegistracion');

router.get('/registro', controllerRegistracion.Registro);
router.get('/login', controllerRegistracion.Login);

module.exports = router;
