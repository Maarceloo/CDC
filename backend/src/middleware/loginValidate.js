const errorFields = "Fields Missing";
const emailRegex = /\S+@\S+\.\S+/;

const emailValidate = async (req, res, next) => {
  const { body } = req;
  if (!body.email) {
    return res.status(400).json({ message: errorFields });
  }

  const validate = emailRegex.test(body.email);
  if (!validate) {
    return res.status(404).json({ message: "Invalid Email" });
  }
  return next();
};

const passwordValidate = async (req, res, next) => {
  const { body } = req;

  if (!body.password) {
    return res.status(400).json({ message: errorFields });
  }

  if (body.password.length < 6) {
    return res.status(404).json({ message: "Invalid Password" });
  }
  return next();
};

const nameValidate = async (req, res, next) => {
  const { body } = req;
  if (!body.name) {
    return res.status(400).json({ message: errorFields });
  }
  if (body.name.length < 4) {
    return res.status(404).json({ message: "Invalid name" });
  }
  return next();
};

module.exports = {
  emailValidate,
  passwordValidate,
  nameValidate,
};
