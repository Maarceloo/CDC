const { Router } = require("express");
const { postUser, login } = require("../controller/loginController");
const {
  emailValidate,
  passwordValidate,
  nameValidate,
} = require("../middleware/loginValidate");

const userRoute = Router();

userRoute.post("/cadastro", emailValidate, passwordValidate, nameValidate, postUser);
userRoute.post("/",emailValidate, passwordValidate, login);

module.exports = userRoute;
