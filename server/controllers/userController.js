const User = require('../models/usuario');

exports.createUser = (user) => {

    try {
        return user.save();
    } catch (error) {
        console.log(error);
    }

}

//Get all users with pagination on querystring
exports.getUsers = (desde, limite) => {
    
    try {
        return User.find({}).skip(desde).limit(limite);
    } catch (error) {
        
    }   
}