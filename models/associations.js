const { Cliente } = require("./cliente.model")
const { Estoque } = require("./estoque.model")
const { Estoque_Produto } = require("./estoque_produto.model")
const { Lista } = require("./lista.model")
const { Lista_Produto } = require("./lista_produto.model")
const { Mercado } = require("./mercado.model")
const { Produto } = require("./produto.model")
const { Usuario } = require("./usuario.model")
const { Admin } = require("./admin.model")

//Heranças de usuario
Cliente.belongsTo(Usuario, {foreignKey: "id_usuario"});
Mercado.belongsTo(Usuario, {foreignKey: "id_usuario"});
Admin.belongsTo(Usuario, {foreignKey: "id_usuario"});

//Relacionamentos muitos->muitos
Produto.belongsToMany(Lista, {
    through: Lista_Produto
});
Lista.belongsToMany(Produto, {
    through: Lista_Produto
});

Produto.belongsToMany(Estoque, {
    through: Estoque_Produto
});
Estoque.belongsToMany(Produto, {
    through: Estoque_Produto
});

//Relacionamentos um->muitos
Mercado.hasMany(Estoque);
Estoque.belongsTo(Mercado);
Cliente.hasMany(Lista);
Lista.belongsTo(Cliente);

module.exports = {
    Usuario,
    Cliente,
    Mercado,
    Produto,
    Lista,
    Estoque
}
