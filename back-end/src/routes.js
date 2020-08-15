const express = require('express');
const ParadaController = require('./controller/ParadaController')
const LinhaController = require('./controller/LinhaController')
const VeiculoController = require('./controller/VeiculoController')
const PosicaoVeiculoController = require('./controller/PosicaoVeiculoController')


const routes = express.Router();

// PARADA
routes.post('/parada', ParadaController.create);
routes.get('/parada', ParadaController.getAll);
routes.put('/parada/:id', ParadaController.update);
routes.delete('/parada/:id', ParadaController.delete);

// LINHAS PARADAS

// routes.get('/parada/linha=id', ParadaController.getAll);
// routes.get('/parada/:id', ParadaController.getAll);

// LINHA
routes.post('/linha', LinhaController.create);
routes.get('/linha', LinhaController.getAll);
routes.put('/linha/:id', LinhaController.update);
routes.delete('/linha/:id', LinhaController.delete);

// VEICULO
routes.post('/veiculo', VeiculoController.create);
routes.get('/veiculo', VeiculoController.getAll);
routes.get('/veiculolinha', VeiculoController.getVeiculoLinha);
routes.put('/veiculo/:id', VeiculoController.update);
routes.delete('/veiculo/:id', VeiculoController.delete);


// POSICAO VEICULO
routes.post('/posicaoveiculo', PosicaoVeiculoController.create);
routes.get('/posicaoveiculo', PosicaoVeiculoController.getAll);
routes.put('/posicaoveiculo/:id', PosicaoVeiculoController.update);
routes.delete('/posicaoveiculo/:id', PosicaoVeiculoController.delete);


module.exports = routes;
