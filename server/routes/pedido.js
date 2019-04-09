const express = require('express');
const Pedido = require('../models/pedido');

const app = express();

app.post('/pedido', function (req, res) {

    let body = req.body;

    let pedido = new Pedido({
        fecha: body.fecha
    });

    pedido.save((err, pedidoDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            mensaje: 'Se creo correctamente el pedido',
            pedido: pedidoDB
        });
    });

});

module.exports = app;