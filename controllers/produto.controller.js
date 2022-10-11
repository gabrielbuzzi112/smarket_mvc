const {Produto} = require("../models/produto.model");


exports.create = (produto) => {
    return Produto.create({
      nome: produto.name
    })
    .then((produto) => {
        console.log(">> Created produto: " + JSON.stringify(produto, null, 2));
        return produto;
    })
    .catch((err) => {
        console.log(">> Error while creating Tag: ", err);
    });
  };

  exports.findAll = () => {
    return Cliente.findAll()
      .then((tags) => {
        return tags;
      })
      .catch((err) => {
        console.log(">> Error while retrieving Tags: ", err);
      });
  };

  exports.findById = (id) => {
    return Cliente.findByPk(id)
      .then((tutorial) => {
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while finding Tutorial: ", err);
      });
  };