const db = require('../database/models');

const controllerProducto = {
    detalle: function(req, res) {
        let id = req.params.id;

        db.Product.findByPk(id)
            .then(function(producto) {
                db.Comentario.findAll()
                    .then(function(comentarios) {
                        db.User.findAll()
                            .then(function(usuarios) {
                                res.render('product', {
                                    producto: producto,
                                    comentarios: comentarios,
                                    usuarios: usuarios
                                });
                            });
                    });
            });
    },

    perfil: function(req, res) {
        let id = req.params.id;

        db.User.findByPk(id)
            .then(function(usuario) {
                db.Product.findAll({
                    where: { usuario_id: id }
                })
                .then(function(productos) {
                    res.render('profile', {
                        usuario: usuario,
                        productos: productos
                    });
                });
            });
    }
};

module.exports = controllerProducto;
