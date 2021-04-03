const {Schema, model} = require('mongoose');

const carreraSchema = new Schema({
    carrera: String,
    codigo: String,
    anios: Array
});

const Carrera = model('Carrera', carreraSchema, 'carreras');

module.exports = Carrera;