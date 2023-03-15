const express = require('express');
const cors = require("cors");
const cartaoRoute = require('./router/cartao')


const app = express();

app.use(cors());
app.use(express.json());
app.use("/cartao", cartaoRoute);


module.exports = app;