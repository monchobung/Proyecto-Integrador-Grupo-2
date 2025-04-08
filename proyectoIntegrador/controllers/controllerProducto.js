const datos = require("../db/index");

const controllerProducto = {
    index: function (req, res) {
        res.render('product',{
            title: 'Producto',
            usuario: datos.usuario,
            productos: datos.productos,
        })
    },
}

module.exports = controllerProducto