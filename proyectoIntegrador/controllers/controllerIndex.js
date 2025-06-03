const db = require('../database/models');
const op = db.Sequelize.Op;

const controllerIndex = {
    index: function(req, res) {
        db.Product.findAll({
            include: [{ association: "user" }]
        })
        .then(function(productos) {
            res.render('index', {
                title: 'Classic Motors',
                productos: productos
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
            },
            include: [{ association: "user" }]
        })
        .then(function(productos) {
            res.render('searchResults', {
                productos: productos,
                busqueda: busqueda
            });
        });
    },
   
    
};

module.exports = controllerIndex;
