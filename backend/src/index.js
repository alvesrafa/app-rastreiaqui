import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
const rastro = require('./Rastro.js')

const app = express();
const server = http.createServer(app);

const correioController = require('./app/controller/correioController');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/rastrear', correioController.veriicarCodigo)

server.listen(3000);