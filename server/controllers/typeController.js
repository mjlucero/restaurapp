const Type = require('../models/type');

//Create new type
exports.createType = type => type.save();

//Get type
exports.getType = id => Type.findById(id);

//Get all users with pagination on querystring
exports.getTypes = (from, limit) => Type.find({}).skip(from).limit(limit);

//Update user
exports.updateType = (id, body) => Type.findOneAndUpdate(id, body, { new: true, runValidators: true });

//Logic delete user
exports.deleteType = id => Type.findOneAndUpdate(id, { active: false }, { new: true });
