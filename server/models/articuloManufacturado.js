const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let articuloManufacturadoSchema = new Schema({
    denominacion: { type: String, required: [true, 'La denominacion es necesaria'] },
    precioVenta: { type: Number },
    tiempoEstadoCocina: { type: Number },
    articulos: [
        {
            cantidad: { type: Number, required: [true, 'La cantidad es necesaria'] },
            articulo: { type: Schema.ObjectId, ref: 'Articulo' }
        }
    ]
});

articuloManufacturadoSchema.pre('save', function (next) {
    let articulo = this;
})


module.exports = mongoose.model('ArticuloManufacturado', articuloManufacturadoSchema);