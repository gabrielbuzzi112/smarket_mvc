const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/clientesController');

router.route('/')
    .get(clientesController.listar)
    .post(clientesController.criar)
    .put(clientesController.atualizar)
    .delete(clientesController.remover);

router.route('/:id')
    .get(employeesController.buscar);

module.exports = router;