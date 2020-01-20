import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
const rastro = require('./Rastro.js')

const app = express();
const server = http.createServer(app);

const correioController = require('./app/controller/correioController');

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*'); //dominio do 'front'
    res.setHeader('Access-Control-Allow-Methods','*');//GET, POST, PUT, DELETE, PATCH, OPTIONS
    res.setHeader('Access-Control-Allow-Headers','*'); // ou Content-Type
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.get('/rastrear/:codigo', correioController.veriicarCodigo)

server.listen(process.env.PORT || 3001, () => {
    console.log('opaaaa')
});