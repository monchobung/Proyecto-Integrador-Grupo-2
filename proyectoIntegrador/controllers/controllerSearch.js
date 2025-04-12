const datos = require("../db/index");

const controllerSearch = {
    index: function (req, res) {
        res.render('searchresults',{

            usuario: datos.usuario,
            productos: datos.productos,
            
        })
    },
}

module.exports = controllerSearch