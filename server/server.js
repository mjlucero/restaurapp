require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));
app.use(require('./routes/pedido'));

mongoose.connect('mongodb://localhost:27017/restaurapp', {useNewUrlParser: true}, ( err, res)=>{
    if( err ) throw err;

    console.log('Base de datos online');
});
 
app.listen(process.env.PORT);