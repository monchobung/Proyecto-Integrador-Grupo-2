const datos = require("../db/index");

const controllerProducto = {
    index: function (req, res) {
        res.render('product', {
            title: 'Producto',
            usuario: datos.usuario,
            productos: datos.productos
        });
    },

    perfil: function (req, res) {
        res.render('profile', {
            usuario: datos.usuario,
            productos: datos.productos
        });
    },

    productadd: function (req, res) {
        res.render('productadd', {
            usuario: datos.usuario
        });
    }
};

module.exports = controllerProducto;
