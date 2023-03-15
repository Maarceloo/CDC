const userServices = require('../service/loginService');

const login = async (req, res) => {
  const { body } = req;
  const { status, message } = await userServices.login(body);

  if (status) {
    return res.status(status).json(message);
  }

  const { id, name, email } = message;
  return res.status(200).json({ id, name, email });
};

const postUser = async (req, res) => {
  const { status, message } = await userServices.postUser(req.body);

  if (status) {
    return res.status(status).json(message);
  }

  const { id, name, email } = message;
  return res.status(201).json({ id, name, email });
};

module.exports = {
    login,
    postUser
}