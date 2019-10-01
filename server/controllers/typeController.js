const Type = require('../models/type');

//Create new type
exports.createType = type => type.save();

//Get type
exports.getType = id => Type.findById(id);

//Get all users with pagination on querystring
exports.getTypes = async (from, limit) =>{
    let types =  await Type.find({}).skip(from).limit(limit);

    let total = await Type.countDocuments({});

    return {
        types,
        total
    };
};

//Update user
exports.updateType = (id, body) => Type.findOneAndUpdate(id, body, { new: true, runValidators: true });

//Logic delete user
exports.deleteType = id => Type.findOneAndUpdate(id, { active: false }, { new: true });
