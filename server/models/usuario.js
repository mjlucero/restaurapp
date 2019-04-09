const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'CHEF_ROLE', 'CLIENT_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario']},
    apellido: { type: String, required: [true, 'El apellido es necesario']},
    telefono: { type: Number, required: [true, 'El telfono es necesario']},
    email:{ type: String, unique: true, required: [true, 'El email es necesario']},
    password: { type: String, required: [true, 'El password es obligatorio']},
    img: { type: String, required: false },
    role: { type: String, default: 'CLIENT_ROLE', enum: rolesValidos },
    domicilio: {
        calle: String,
        numero: Number,
        localidad: String
    },
    activo: { type: Boolean, default: true },
});

usuarioSchema.methods.toJSON = function () {
    let user = this;
    
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
};

usuarioSchema.plugin( uniqueValidator, {
    message: '{PATH} debe de ser unico'
});

module.exports = mongoose.model('Usuario', usuarioSchema);