const { Cartao } = require("../../src/database/models");

const cadastroCartaoService = async (body) => {
  const newCartao = await Cartao.create(body);
  return newCartao;
};

const getAllCards = async ({ email }) => {
  const cartoes = await Cartao.findAll({ where: { email }});
  return cartoes;
};

module.exports = { cadastroCartaoService, getAllCards };
