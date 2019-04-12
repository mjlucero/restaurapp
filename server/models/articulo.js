const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let articuloSchema = new Schema({
    denominacion: { type: String, required: [true, 'La denominacion es necesaria'] },
    precioCompra: { type: Number },
    precioVenta: { type: Number },
    stockActual: { type: Number },
    UnidadMedida: { type: String },
    esInsumo: { type: Boolean },
    rubro: { type: Schema.ObjectId, ref: 'Rubro' }
});

articuloSchema.pre('save', function (next) {
    let articulo = this;
})


module.exports = mongoose.model('Articulo', articuloSchema);