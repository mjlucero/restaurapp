const mongoose = require('mongoose');
const Secuencia = require('./sequencia');

let Schema = mongoose.Schema;

let facturaSchema = new Schema({
    fecha: { type: String, required: [true, 'La fecha es necesaria'] },
    numero: { type: Number },
    montoDescuento: { type: Number },
    total: { type: Number },
    pedido: { type: Schema.ObjectId, ref: 'Pedido' }
});

facturaSchema.pre('save', function (next) {
    let factura = this;

    Secuencia.findByIdAndUpdate({ _id: 'numeroFactura' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
        .then(secuencia => {
            factura.numero = secuencia.seq;
            next();
        })
        .catch(err => {
            console.error("counter error-> : " + err);
            throw err;
        });
})


module.exports = mongoose.model('Factura', facturaSchema);