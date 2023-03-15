const { Cartao } = require("../../src/database/models");

const cadastroCartaoService = async (body) => {
    console.log(body);
    const newCartao = await Cartao.create(body)
    console.log(newCartao);
    return newCartao
};

module.exports = { cadastroCartaoService };
