const { Router } = require('express');
const { cadastroCartaoController } = require('../controller/cartaoController');

const cartaoRoute = Router();

cartaoRoute.post('/cadastro', cadastroCartaoController);

module.exports = cartaoRoute;
