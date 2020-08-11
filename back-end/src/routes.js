const express = require('express');
const ParadaController = require('./controller/ParadaController')


const routes = express.Router();

routes.post('/parada',ParadaController.create);
routes.get('/parada',ParadaController.index);

// routes.delete('/incidents/:id',IncidentsController.delete)

module.exports = routes;
