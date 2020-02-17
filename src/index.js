import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

const cors = require('cors');
const app = express();
const server = http.createServer(app);

const correioController = require('./app/controller/correioController');
const emailController = require('./app/controller/emailController');

app.use(cors());

app.use(express.json())

app.get('/rastrear/:codigo', correioController.veriicarCodigo);

app.post('/email', emailController.enviarEmail);

server.listen(process.env.PORT || 3001, () => {
    console.log('Servidor rodando')
});