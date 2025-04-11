const datos = require("../db/index");
const controllerProductadd = {
    index: function (req, res) {
        res.render('productadd',{

            usuario: datos.usuario,
        })
    },
}

module.exports = controllerProductadd