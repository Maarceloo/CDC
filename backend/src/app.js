const express = require('express');
const cors = require("cors");
const cartaoRoute = require('./router/cartao')
const userRoute = require('./router/user')


const app = express();

app.use(cors());
app.use(express.json());
app.use("/login", userRoute);
app.use("/cartao", cartaoRoute);


module.exports = app;