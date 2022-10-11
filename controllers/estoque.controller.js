const {Estoque} = require("../models/estoque.model");
const {Produto} = require("../models/produto.model");

exports.create = (cliente, estoque) => {
    return Estoque.create({
        nome: estoque.nome,
        id_cliente: cliente.id
    })
    .then((estoque) => {
        console.log(">> Created estoque: " + JSON.stringify(estoque, null, 2));
        return estoque;
    })
    .catch((err) => {
        console.log(">> Error while creating Tag: ", err);
    });
};

exports.findAll = () => {
    return Estoque.findAll({
      include: [
        {
          model: Produto,
          as: "Produtos",
          attributes: ["id", "nome"],
          through: {
            attributes: ["quantidade", "preco"],
          }
        },
      ],
    })
      .then((tags) => {
        return tags;
      })
      .catch((err) => {
        console.log(">> Error while retrieving Tags: ", err);
      });
  };

exports.findById = (id) => {
    return Estoque.findByPk(id, {
        include: [
            {
              model: Produto,
              as: "Produtos",
              attributes: ["id", "nome"],
              through: {
                attributes: ["quantidade", "preco"],
              }
            },
        ],
    })
      .then((tag) => {
        return tag;
      })
      .catch((err) => {
        console.log(">> Error while finding Tag: ", err);
      });
  };

exports.adicionar_produto = (id_estoque, id_produto, quantidade, preco) => {
    return Estoque.findByPk(id_estoque)
      .then((estoque) => {
        if (!estoque) {
          console.log("estoque not found!");
          return null;
        }
        return Produto.findByPk(id_produto).then((produto) => {
          if (!produto) {
            console.log("produto not found!");
            return null;
          }
          
          estoque.addProduto(produto, { through: { quantidade: quantidade, preco: preco } }); //função do sequelize
          console.log(`>> added produto id=${produto.id} to estoque id=${estoque.id}`);
          return estoque;
        });
      })
      .catch((err) => {
        console.log(">> Error while adding produto to estoque: ", err);
      });
  };