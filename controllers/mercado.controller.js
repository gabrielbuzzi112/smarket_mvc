const {Mercado} = require("../models/mercado.model");


exports.create = (usuario, mercado) => {
    return Mercado.create({
      cnpj: mercado.name,
      cidade: mercado.cidade,
      id_usuario: usuario.id
    })
    .then((mercado) => {
        console.log(">> Created mercado: " + JSON.stringify(mercado, null, 2));
        return mercado;
    })
    .catch((err) => {
        console.log(">> Error while creating Tag: ", err);
    });
  };