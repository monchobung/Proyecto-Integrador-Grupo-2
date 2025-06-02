const db = require("../database/models");
const User = db.User;
const bcrypt = require("bcryptjs");

const controllerRegistracion = {
    
    Registro: function(req, res) {
        if (req.session) {
            if (req.session.userLoggeado) {
                return res.redirect("/miPerfil");
            }
        }
        return res.render("register");
    },

    ProcesarRegistro: function(req, res) {
        var usuario = req.body.usuario;
        var email = req.body.email;
        var contrasena = req.body.contrasena;
        var nacimiento = req.body.nacimiento;

        if (email == "") {
            return res.send("El email no puede estar vacio.");
        }

        if (contrasena.length < 3) {
            return res.send("La contraseña debe tener al menos 3 caracteres.");
        } 

        User.findOne({ where: { email: email } })
            .then(function(usuarioExistente) {
                if (usuarioExistente) {
                    return res.send("Este email ya está registrado.");
                } else {
                    var passwordEncriptada = bcrypt.hashSync(contrasena, 10);

                    User.create({
                        nombre_usuario: usuario,
                        email: email,
                        contrasena: passwordEncriptada,
                        fecha_nacimiento: nacimiento
                    })
                    .then(function() {
                        return res.redirect("/login");
                    })
                    .catch(function(error) {
                        return res.send("Error al crear el usuario.");
                    });
                }
            })
            .catch(function(error) {
                console.error(error);
                return res.send("Error al verificar el email.");
            });
    },

    Login: function(req, res) {
        if (req.session) {
            if (req.session.userLoggeado) {
                return res.redirect("/miPerfil");
            }
        }
        return res.render("login");
    },

    ProcesarLogin: function(req, res) {
        var email = req.body.email;
        var contrasena = req.body.contrasena;

        User.findOne({ where: { email: email } })
            .then(function(resultado) {
                if (resultado != null) {
                    var check = bcrypt.compareSync(contrasena, resultado.contrasena);
                    if (check) {
                        req.session.userLoggeado = resultado;

                        if (req.body.recordame != undefined) {
                            res.cookie("recordame", resultado, { maxAge: 1000 * 60 * 60 });
                        }

                        return res.redirect("/");
                    } else {
                        return res.send("Contraseña incorrecta.");
                    }
                } else {
                    return res.send("Usuario no encontrado.");
                }
            })
            .catch(function(error) {
                return res.send("Error al procesar el login.");
            });
    },
       
    Logout: function(req, res) {
        res.clearCookie("recordame");
        req.session.destroy();
        return res.redirect("/");
    }

};

module.exports = controllerRegistracion;