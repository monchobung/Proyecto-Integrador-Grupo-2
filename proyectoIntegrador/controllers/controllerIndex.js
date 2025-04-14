const datos = require("../db/index");

const controllerIndex = {
    index: function(req, res) {
        res.render('index', {
            title: 'Express',
            usuario: datos.usuario,
            productos: datos.productos,
        });
    },

    search: function(req, res) {
        res.render('searchresults', {
            usuario: datos.usuario,
            productos: datos.productos,
        });
    }
};

module.exports = controllerIndex;
