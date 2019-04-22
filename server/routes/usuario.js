const express = require('express');
const app = express();

const Usuario = require('../models/usuario');

const bcrypt = require('bcrypt');
const _ = require('underscore');

const userController = require('../controllers/userController');

app.get('/usuario', async function (req, res) {
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    let users = await userController.getUsers(desde, limite);

    res.json({
        ok: true,
        usuarios: users
    });
});

app.get('/usuario/:id', function (req, res) {
    res.send('Hello World')
});

app.post('/usuario', async function (req, res) {
    let body = req.body;

    let user = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        telefono: body.telefono,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    console.log(await userController.createUser(user));
});

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre',
        'apellido',
        'telefono',
        'email',
        'img',
        'role',
        'activo']);

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            mensaje: 'Se actualizo correctamente el usuario',
            usuario: usuarioDB
        });

    });

});

app.delete('/usuario/:id', function (req, res) {
    let id = req.params.id;

    Usuario.findByIdAndUpdate(id, { activo: false }, { new: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            mensaje: 'Se dio de baja correctamente el usuario',
            usuario: usuarioDB
        });

    });
});


module.exports = app;
