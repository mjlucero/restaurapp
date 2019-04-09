const express = require('express');
const Usuario = require('../models/usuario');

const app = express();

const bcrypt = require('bcrypt');
const _ = require('underscore');

app.get('/usuario', function (req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);
    
    Usuario.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, usuariosDB)=>{
            
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Usuario.count({}, (err, conteo)=>{
                res.json({
                    ok:true,
                    usuarios: usuariosDB,
                    total: conteo
                });
            });
        })
});

app.get('/usuario/:id', function (req, res) {
    res.send('Hello World')
});

app.post('/usuario', function (req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        telefono: body.telefono,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            mensaje: 'Se creo correctamente el usuario',
            usuario: usuarioDB
        });
    });


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
