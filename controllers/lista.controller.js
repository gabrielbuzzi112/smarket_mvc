const {Lista} = require("../models/lista.model");
const {Produto} = require("../models/produto.model");

exports.create = (cliente, lista) => {
    return Lista.create({
        nome: lista.nome,
        id_cliente: cliente.id
    })
    .then((lista) => {
        console.log(">> Created lista: " + JSON.stringify(lista, null, 2));
        return lista;
    })
    .catch((err) => {
        console.log(">> Error while creating Tag: ", err);
    });
};

exports.findAll = () => {
    return Lista.findAll({
      include: [
        {
          model: Produto,
          as: "Produtos",
          attributes: ["id", "nome"],
          through: {
            attributes: ["quantidade"],
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
    return Lista.findByPk(id, {
        include: [
            {
              model: Produto,
              as: "Produtos",
              attributes: ["id", "nome"],
              through: {
                attributes: ["quantidade"],
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

exports.adicionar_produto = (id_lista, id_produto, quantidade) => {
    return Lista.findByPk(id_lista)
      .then((lista) => {
        if (!lista) {
          console.log("lista not found!");
          return null;
        }
        return Produto.findByPk(id_produto).then((produto) => {
          if (!produto) {
            console.log("produto not found!");
            return null;
          }
          
          lista.addProduto(produto, { through: { quantidade: quantidade } }); //função do sequelize
          console.log(`>> added produto id=${produto.id} to lista id=${lista.id}`);
          return lista;
        });
      })
      .catch((err) => {
        console.log(">> Error while adding produto to lista: ", err);
      });
  };