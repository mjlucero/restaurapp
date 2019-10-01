const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const _ = require("underscore");

const User = require('../models/user');

const { ResourceNotFound } = require("../errors");

//Login user
const loginUser = async (email, password) => {
    let userDB = await User.findOne({ email });

    if (!userDB) {
        throw new ResourceNotFound('User not found');
    }

    if (!bcrypt.compareSync(password, userDB.password)) {
        throw new ResourceNotFound('User not found');
    }

    let token = jwt.sign({ user: userDB }, process.env.SEED, { expiresIn: process.env.EXPIRATION_TIME });

    return {
        userDB,
        token
    };
};

//Create user
const createUser = (name, lastName, telephone, email, password) => {
    let user = new User({
        name,
        lastName,
        telephone,
        email,
        password: bcrypt.hashSync(password, 10)
    });

    return user.save();
};

//Get user
const getUser = id => User.findById(id);

//Get all users with pagination on querystring
const getUsers = async (from, limit) => {
    let users = await User.find({}).skip(from).limit(limit);

    let total = await User.countDocuments({});

    return {
        users,
        total
    };
};

//Update user
const updateUser = (id, body) => {
    let user = _.pick(body, [
        "name",
        "lastName",
        "telephone",
        "img",
        "role",
        "active"
    ]);

    return User.findOneAndUpdate(id, user, { new: true, runValidators: true });
};

//Logic delete user
const deleteUser = id => User.findOneAndUpdate(id, { active: false }, { new: true });

module.exports = {
    loginUser,
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
};