const db = require('../database/models');

const controllerProducto = {

    detalle: function(req, res) {
        let id = req.params.id;

        db.Product.findByPk(id, {
            include: [
                { association: "comentario", include: ["user"] },
                { association: "user" }
            ]
        })
        .then(function(producto) {
            res.render('product', {
                producto: producto
            });
        });
    },

    perfil: function(req, res) {
        let id = req.params.id;

        db.User.findByPk(id, {
            include: [{ association: "products" }]
        })
        .then(function(usuario) {
            res.render('profile', {
                usuario: usuario,
                productos: usuario.products
            });
        });
    }
};

module.exports = controllerProducto;
