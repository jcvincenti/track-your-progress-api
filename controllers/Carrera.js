const router = require('express').Router();
const Carrera = require('../models/Carrera');

router.get('/', async (request, response) => {
    await Carrera
        .find({})
        .then(carrera => {
            response.json(carrera);
        })
});

router.get('/:codigo', async (request, response) => {
    await Carrera
        .findOne({codigo: request.params.codigo})
        .then(carrera => {
            response.json(carrera);
        })
})

module.exports = router;