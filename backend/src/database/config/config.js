require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "cdc_db",
  port: process.env.MYSQL_PORT || "3306",
  host: process.env.MYSQL_HOST || "db",
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};