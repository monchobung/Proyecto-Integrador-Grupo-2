const db = require('../database/models');
const op = db.Sequelize.Op;

const controllerIndex = {

    index: function(req, res) {
        db.Product.findAll()
            .then(function(productos) {
                db.Comentario.findAll()
                    .then(function(comentarios) {
                        res.render('index', {
                            title: 'Classic Motors',
                            productos: productos,
                            comentarios: comentarios
                        });
                    });
            });
    },

    search: function(req, res) {
        let busqueda = req.query.search;

        db.Product.findAll({
            where: {
                nombre_producto: {
                    [op.like]: '%' + busqueda + '%'
                }
            }
        })
            .then(function(productos) {
                db.Comentario.findAll()
                    .then(function(comentarios) {
                        res.render('searchResults', {
                            productos: productos,
                            comentarios: comentarios,
                            busqueda: busqueda
                        });
                    });
            });
    }

};

module.exports = controllerIndex;
