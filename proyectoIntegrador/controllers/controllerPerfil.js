const datos = require('../db/index')

const controllerPerfil = {
    index: function (req, res) {

        res.render('profile', {
            
            usuario: datos.usuario,
            productos: datos.productos 
        })
    },

}

module.exports = controllerPerfil