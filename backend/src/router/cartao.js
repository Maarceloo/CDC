const { Router } = require('express');
const { cadastroCartaoController, getAllCards } = require('../controller/cartaoController');

const cartaoRoute = Router();

cartaoRoute.post('/cadastro', cadastroCartaoController);
cartaoRoute.post('/cadastro', cadastroCartaoController);
cartaoRoute.get('/allcards', getAllCards);

module.exports = cartaoRoute;
