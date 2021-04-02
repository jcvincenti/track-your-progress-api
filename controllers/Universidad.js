const router = require('express').Router();
const Universidad = require('../models/Universidad');

router.get('/', async (request, response) => {
    await Universidad.find({}).then(universidad => {
        response.json(universidad);
    })
});

router.get('/:codigo', async (request, response) => {
    await Universidad.findOne({codigo: request.params.codigo}).then(universidad => {
        response.json(universidad);
    })
});

module.exports = router;