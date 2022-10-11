const {Cliente} = require("../models/cliente.model");
const {Usuario} = require("../models/usuario.model");

exports.create = (usuario, cliente) => {
    return Cliente.create({
      cpf: cliente.name,
      cidade: cliente.cidade,
      id_usuario: usuario.id
    })
    .then((cliente) => {
        console.log(">> Created cliente: " + JSON.stringify(cliente, null, 2));
        return cliente;
    })
    .catch((err) => {
        console.log(">> Error while creating Tag: ", err);
    });
  };

  exports.findAll = () => {
    return Cliente.findAll({
      include: [
        {
          model: Usuario,
          as: "Usuario",
          attributes: ["id", "nome", "email"],
          through: {
            attributes: [],
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
    return Cliente.findByPk(id, {
      include: [
        {
          model: Usuario,
          as: "Usuario",
          attributes: ["id", "nome", "email"],
          through: {
            attributes: [],
          }
        },
      ],
    })
      .then((tutorial) => {
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while finding Tutorial: ", err);
      });
  };