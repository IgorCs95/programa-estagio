const express = require('express');
const ParadaController = require('./controller/ParadaController')
const LinhaController = require('./controller/LinhaController')
const VeiculoController = require('./controller/VeiculoController')
const PosicaoVeiculoController = require('./controller/PosicaoVeiculoController')


const routes = express.Router();
// PARADA
routes.post('/parada', ParadaController.create);
routes.get('/parada', ParadaController.getAll);

// LINHA
routes.post('/linha', LinhaController.create);
routes.get('/linha', LinhaController.getAll);

// VEICULO
routes.post('/veiculo', VeiculoController.create);
routes.get('/veiculo', VeiculoController.getAll);

// POSICAO VEICULO
routes.post('/posicaoveiculo', VeiculoController.create);
routes.get('/posicaoveiculo', VeiculoController.getAll);


module.exports = routes;
