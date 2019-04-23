const User = require('../models/user');

//Create user
exports.createUser = (user) => user.save();

//Get user
exports.getUser = id => User.findById(id);

//Get all users with pagination on querystring
exports.getUsers = (from, limit) => User.find({}).skip(from).limit(limit);

//Update user
exports.updateUser = (id, body) => User.findOneAndUpdate(id, body, { new: true, runValidators: true });

//Logic delete user
exports.deleteUser = id => User.findOneAndUpdate(id, { active: false }, { new: true });