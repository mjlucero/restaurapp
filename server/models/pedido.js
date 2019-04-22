const mongoose = require('mongoose');
const Secuencia = require('./sequencia');

let Schema = mongoose.Schema;

let pedidoSchema = new Schema({
    fecha: { type: String, required: [true, 'La fecha es necesaria'] },
    numero: { type: Number },
    estado: { type: Number },
    horaEstimadaFin: { type: Date },
    tipoEnvio: { type: Number },
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
    }],
    cliente: { type: Schema.ObjectId, ref: 'Usuario' },

});

pedidoSchema.pre('save', function (next) {
    let pedido = this;

    Secuencia.findByIdAndUpdate({ _id: 'numeroPedido' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
        .then(secuencia => {
            pedido.numero = secuencia.seq;
            next();
        })
        .catch(err => {
            console.error("counter error-> : " + err);
            throw err;
        });
})


module.exports = mongoose.model('Pedido', pedidoSchema);