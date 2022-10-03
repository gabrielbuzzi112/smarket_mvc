const {sequelize} = require('../models/clientes.model.js');

const listar = (req, res) => {
    
    sequelize.sync().then(() => {

        Cliente.findAll().then(lista => {
            res.status(200).json(lista);
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
    
    //pede pra model todos os clientes no
}

const criar = (req, res) => {
    sequelize.sync().then(() => {
        console.log('Book table created successfully!');
        Cliente.create({
             nome: req.body.nome
         }).then(res => {
             console.log(res)
         }).catch((error) => {
             console.error('Failed to create a new record : ', error);
         });
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
    
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