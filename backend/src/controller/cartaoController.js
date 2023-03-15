const service = require('../service/cartaoService');

const cadastroCartaoController = async (req, res) => {
    try {
        await service.cadastroCartaoService(req.body);
        return res.status(201).json("Cadastrado com sucesso");
    } catch (error) {
        return res.status(404).json(`Cadastro negado: ${error}`)
    }
};

module.exports = { cadastroCartaoController };