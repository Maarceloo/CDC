const { User } = require("../database/models");

const login = async ({ email, password }) => {
    const getUser = await User.findOne({ where: { email } });
    if (!getUser) {
        return { status: 404, message: 'User Not Found' };
    }

    if (password !== getUser.password || email !== getUser.email) {
        return { status: 404, message: 'Password or Email is Not Correct' };
    }

    return { status: null, message: getUser };
};

const postUser = async ({ name, email, password }) => {
  // Verifica se o User ja existe
  const getUserByEmail = await User.findOne({ where: { email } });
  if (getUserByEmail) {
    return { status: 409, message: "User Alredy Exist" };
  }

  const createUser = await User.create({ name, email, password });
  if (!createUser) {
    return { status: 400, message: "User Not Created" };
  }

  return { status: null, message: createUser };
};

module.exports = {
  login,
  postUser,
};
