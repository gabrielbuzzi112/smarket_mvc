const express = require('express');
const router = express.Router();

const clientesController = require('../../controllers/clientes.controller');

router.route('/')
    .get(clientesController.listar)
    .post(clientesController.criar)
    .put(clientesController.atualizar)
    .delete(clientesController.remover);

router.route('/:id')
    .get(clientesController.buscar);

module.exports = router;