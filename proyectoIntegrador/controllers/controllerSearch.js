const datos = require("../db/index");

const controllerSearch = {
    index: function (req, res) {
        res.render('searchresults',{
            title: 'Producto',
            usuario: datos.usuario,
            productos: datos.productos,
        })
    },
}

module.exports = controllerSearch