const {Schema, model} = require('mongoose');

const schemaUniverisdad = new Schema({
    nombre: String,
    codigo: String,
    carreras: Array,
    habilitado: Boolean
})

const Universidad = model('Universidad', schemaUniverisdad, 'universidades');

module.exports = Universidad;