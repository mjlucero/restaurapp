//Puerto
process.env.PORT = process.env.PORT || 5000;

//Enviorement
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//DB
let urlDB = 'mongodb+srv://resadmin:j2Oeo0NdOZeIdgAl@cluster0-zhby2.mongodb.net/restaurapp?retryWrites=true';

/*if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/restaurapp';
}else{
    urlDB = process.env.MONGO_URI;
}*/

process.env.URL_DB = urlDB;

