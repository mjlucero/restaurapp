const express = require('express');
const app = express();

const Type = require('../models/type');
const TypeController = require('../controllers/typeController');

app.get('/type', async function (req, res) {
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 5;
    limit = Number(limit);

    let types = await TypeController.getTypes(from, limit);

    res.json({
        ok: true,
        types
    });
});

app.get('/type/:id', async function (req, res) {
    let id = req.params.id;

    let type = await TypeController.getType(id);

    res.json({
        ok: true,
        type
    });
});

app.post('/type', async function (req, res) {
    let body = req.body;

    let type = new Type({
        denomination: body.denomination
    });

    let typeDB = await TypeController.createType(type);

    res.json({
        ok: true,
        type: typeDB
    });
});

app.put('/type/:id', async function (req, res) {
    let id = req.params.id;
    let body = req.body;

    let typeUpdated = await TypeController.updateType(id, body);

    res.json({
        ok: true,
        type: typeUpdated
    });

});

app.delete('/type/:id', async function (req, res) {
    let id = req.params.id;

    let typeDeleted = await TypeController.deleteType(id);

    res.json({
        ok: true,
        type: typeDeleted
    });

});


module.exports = app;