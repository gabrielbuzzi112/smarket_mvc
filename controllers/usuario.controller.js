const {Usuario} = require("../models/usuario.model");

exports.create = (usuario) => {
    return Usuario.create({
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    })
    .then((usuario) => {
        console.log(">> Created usuario: " + JSON.stringify(usuario, null, 2));
        return usuario;
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