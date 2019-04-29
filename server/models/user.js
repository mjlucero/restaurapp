const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let validRols = {
    values: ['ADMIN_ROLE', 'CHEF_ROLE', 'CLIENT_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String, required: [true, 'Name is required'] },
    lastname: { type: String, required: [true, 'Lastname is required'] },
    telephone: { type: Number, required: [true, 'Telephone is required'] },
    email: { type: String, unique: true, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    img: { type: String, required: false },
    role: { type: String, default: 'CLIENT_ROLE', enum: validRols },
    address: {
        street: String,
        number: Number,
        location: String
    },
    active: { type: Boolean, default: true },
});

userSchema.methods.toJSON = function () {
    let user = this;

    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
};

userSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser unico'
});

module.exports = mongoose.model('User', userSchema);