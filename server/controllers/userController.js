const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { ResourceNotFound } = require("../errors");

//Login user
const loginUser = async (email, password) => {
    try {
        let userDB = await User.findOne({ email });

        if (!userDB) {
            throw new ResourceNotFound('User not found');
        }

        if (!bcrypt.compareSync(password, userDB.password)) {
            throw new ResourceNotFound('User not found');
        }

        let token = jwt.sign({ user: userDB }, process.env.SEED, { expiresIn: process.env.EXPIRATION_TIME });

        let response = {
            userDB,
            token
        };

        return response;

    } catch (error) {
        throw error;
    }
}

//Create user
const createUser = (user) => user.save();

//Get user
const getUser = id => User.findById(id);

//Get all users with pagination on querystring
const getUsers = (from, limit) => User.find({}).skip(from).limit(limit);

//Update user
const updateUser = (id, body) => User.findOneAndUpdate(id, body, { new: true, runValidators: true });

//Logic delete user
const deleteUser = id => User.findOneAndUpdate(id, { active: false }, { new: true });

module.exports = {
    loginUser,
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}