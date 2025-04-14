const controllerRegistracion = {
    Registro: function (req, res) {
        res.render('register');
    },
    Login: function (req, res) {
        res.render('login');
    }
};

module.exports = controllerRegistracion;