const service = require('../service/cartaoService');

const cadastroCartaoController = async (req, res) => {
    try {
        await service.cadastroCartaoService(req.body);
        return res.status(201).json("Cadastrado com sucesso");
    } catch (error) {
        return res.status(404).json(`Cadastro negado: ${error}`)
    }
};

const getAllCards = async (req, res) => {
    try {
        console.log();
        const cards = await service.getAllCards(req.body)
        return res.status(200).json(cards);
    } catch (error) {
        return res.status(404).json(`Erro no getAll: ${error}`)
    }
}

module.exports = { cadastroCartaoController, getAllCards };