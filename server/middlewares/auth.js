'use strict';

const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../errors');

const verifyToken = (req, res, next) => {
    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            throw new Unauthorized(err.message);
        }

        req.user = decoded.user;
        next();
    });
};

module.exports = {
    verifyToken
}