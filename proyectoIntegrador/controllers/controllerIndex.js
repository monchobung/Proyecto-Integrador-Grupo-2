const datos = require("../db/index");

const controllerIndex = {
    index: function(req, res, next) {

      res.render('index', {
        title: 'Express',
        usuario: datos.usuario,
        productos: datos.productos,
        
    });
    

      }
}

module.exports = controllerIndex