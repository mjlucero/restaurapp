const mongoose = require('mongoose');
const Secuencia = require('./sequencia');

let Schema = mongoose.Schema;

let pedidoSchema = new Schema({
    fecha: { type: String, required: [true, 'La fecha es necesaria']},
    numero: { type: Number }
});

pedidoSchema.pre('save', function(next){
    let pedido = this;

    Secuencia.findByIdAndUpdate({_id: 'numeroPedido'},{$inc: { seq: 1} },{new: true, upsert: true})
        .then( secuencia => {
            pedido.numero = secuencia.seq;
            next();
        })
        .catch( err => {
            console.error("counter error-> : "+ err);
            throw err;
        });
})


module.exports = mongoose.model('Pedido', pedidoSchema);