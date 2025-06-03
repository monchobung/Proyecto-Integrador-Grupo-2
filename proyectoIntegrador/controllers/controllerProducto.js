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
            res.render('product', { producto: producto });
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
    },
    productadd: function(req, res) {
        return res.render('productadd');
    },
    
    

    
    guardar: function(req, res) {
        db.Product.create({
            imagen: req.body.imagen,
            nombre_producto: req.body.nombre_producto,
            descripcion: req.body.descripcion,
            usuario_id: req.session.userLoggeado.id
        })
        .then(function() {
            res.redirect('/');
        });
    },

    agregar_comentario: function(req, res) {
        if (!req.session.userLoggeado) {
            return res.redirect('/login'); 
        }
    
        db.Comentario.create({
            texto: req.body.texto,
            producto_id: req.params.id,
            usuario_id: req.session.userLoggeado.id,
            
        })
        .then(function() {
            res.redirect('/producto/detalle/' + req.params.id);
        });
    }



};



module.exports = controllerProducto;
