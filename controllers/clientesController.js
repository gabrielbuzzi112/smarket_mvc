//Chama a model
//const model = require('../models');

const listar = (req, res) => {
    //pede pra model todos os clientes no
}

const criar = (req, res) => {
    //Dados que vem do corpo da requisição
    /*
    const dados = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
        //resto dos campos que vao entrar no banco
    }
    */
    //Chamar a Model para registrar um novo funcionario na db
}

const atualizar = (req, res) => {
    //Dados que vem do corpo da requisição
    /*
    const dados = {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname
        //resto dos campos que vao entrar no banco
    }
    */
    //Chamar a Model para fazer o update do funcionario
}

const remover = (req, res) => {
    //Dados que vem do corpo da requisição
    /*
    const dados = {
        id: req.body.id,
    }
    */
    //Chamar a model para excluir um Cliente do banco
}

const buscar = (req, res) => {
    //Dados que vem do corpo da requisição
    /*
    const dados = {
        id: req.body.id,
    }
    */
    //Chamar a model para buscar um unico cliente com este id
}

module.exports = {
    listar,
    criar,
    atualizar,
    remover,
    buscar
}