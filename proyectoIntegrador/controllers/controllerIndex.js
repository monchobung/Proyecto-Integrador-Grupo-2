const controllerIndex = {
    index: function(req, res, next) {

        res.render('index', { title: 'Express' });

      }
}

module.exports = controllerIndex