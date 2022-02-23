/*
const express = require('express');

const PORT = 5000;
const app = express();
app.listen(PORT, () => {
  console.log(`server start on ${5000}`);
});
*/

//server
require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    await sequelize.authenticate(); //подкл к БД
    await sequelize.sync(); //синхр с БД

    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
