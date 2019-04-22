const User = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');

//Get all users with pagination on querystring
exports.getUsers = (req, res) => {
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    User.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, usuariosDB) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            User.count({}, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios: usuariosDB,
                    total: conteo
                });
            });
        })
}