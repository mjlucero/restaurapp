const mongoose = require('mongoose');
const Secuencia = require('./sequencia');

let Schema = mongoose.Schema;

let facturaSchema = new Schema({
    fecha: { type: String, required: [true, 'La fecha es necesaria'] },
    numero: { type: Number },
    montoDescuento: { type: Number },
    total: { type: Number },
    detalles: [{
        _id: false,
        subtotal: { type: Number, required: [true, 'El subtotal es necesario'] },
        articulo: {
            cantidad: { type: Number, required: [true, 'La cantidad es necesaria'] },
            detalle: { type: Schema.ObjectId, ref: 'Articulo' }
        },
        articuloManufacturado: {
            cantidad: { type: Number, required: [true, 'La cantidad es necesaria'] },
            detalle: { type: Schema.ObjectId, ref: 'ArticuloManufacturado' }
        }
    }]
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