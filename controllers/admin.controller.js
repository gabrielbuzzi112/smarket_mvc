const {Admin} = require("../models/admin.model");
const {Usuario} = require("../models/usuario.model");

exports.create = (usuario, admin) => {
    return Admin.create({
      cpf: admin.name,
      cidade: admin.cidade,
      id_usuario: usuario.id
    })
    .then((admin) => {
        console.log(">> Created admin: " + JSON.stringify(admin, null, 2));
        return admin;
    })
    .catch((err) => {
        console.log(">> Error while creating Tag: ", err);
    });
  };

  exports.findAll = () => {
    return Admin.findAll({
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
    return Admin.findByPk(id, {
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