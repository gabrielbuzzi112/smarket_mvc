var bcrypt = require('bcryptjs');
const LocalStrategy = require("passport-local").Strategy;
const {sequelize, DataTypes, Usuario} = require('./models/usuario.model.js');


module.exports = (passport)=>{
    
    function findUser(email) {
        const usuario = Usuario.findOne({ where: { email: email } }).then(result=> {
            return result.dataValues;
        });  
        
        
    }

    function findUserById(id) {
        const usuario = Usuario.findOne({ where: { id: id } });  
        return usuario;
    } 

    passport.serializeUser((user, done)=>{
        done(null, user.id)
    });

    passport.deserializeUser((id, done)=>{
            const usuario = Usuario.findOne({ where: { id: id } }).then(result=> {
                done(null, result.dataValues);
            }).catch((error) => {
                console.log(error);
                return done(error, null);
            });
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha'
    }, (username, password, done)=>{
            const usuario = Usuario.findOne({ where: { email: username } }).then(result=> {
                if (!result.dataValues) return done(null, false);
            
                const isValid = bcrypt.compareSync(password, result.dataValues.senha);

                if(!isValid) return done(null, false);
                return done(null, result.dataValues);
            }).catch((error)=> {
                console.log(error);
                return done(error, false);
            });
    }))

}