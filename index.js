require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongo = require('./mongo');
const app = express();
const universidadController = require('./controllers/Universidad');
const carreraController = require('./controllers/Carrera');

mongo.connect();

app.use(cors());

app.use('/api/universidades', universidadController);
app.use('/api/carreras', carreraController);

app.listen(process.env.PORT);