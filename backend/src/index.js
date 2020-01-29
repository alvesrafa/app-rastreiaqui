import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const correioController = require('./app/controller/correioController');

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.get('/rastrear/:codigo', correioController.veriicarCodigo)

server.listen(process.env.PORT || 3001, () => {
    console.log('Servidor rodando')
});