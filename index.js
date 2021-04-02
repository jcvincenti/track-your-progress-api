require('dotenv').config();

const express = require('express');

const mongo = require('./mongo');
const app = express();
const universidadController = require('./controllers/Universidad');

mongo.connect();

app.use('/api/universidades', universidadController);

app.listen(process.env.PORT);