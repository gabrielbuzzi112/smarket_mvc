const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')
const sequelize = require('sequelize')

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 3000
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')

require('./auth')(passport)

const app = express()

app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))
app.use(cors(corsOptions))

app.use(session({
    secret: process.env.SESSION_SECRET, //Colocar em variavel de ambiente
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 15*60*1000} //2*60*1000 = 2 minutos 30*60*1000 = 30 minutos
}))

app.use(passport.initialize())
app.use(passport.session())

// Rotas Publicas
app.use('/', require('./routes/root'))

// Rotas que exigem que o usuario estaja deslogado
app.use('/cadastro', checkNotAuthenticated, require('./routes/cadastro'))
app.use('/login', checkNotAuthenticated, require('./routes/login'))

// Rotas que exigem que o usuario esteja logado
app.use('/logout', checkAuthenticated, require('./routes/logout'))
app.use('/clientes', checkAuthenticated, require('./routes/clientes'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" })
    } else {
        res.type('txt').send("404 Not Found")
    }
})

app.use(errorHandler)

function checkAuthenticated(req, res, next) {
    // .isAuthenticated e uma funcao do proprio passport que retorna true caso tenha um usuario logado
    if(req.isAuthenticated()){
        return next()
    }
    // Caso contrario redirecionamos para a tela de login
    res.redirect('/login')
}

// Definicao da funcao que verifica se nao existe um usuario logado no momento
function checkNotAuthenticated(req, res, next) {
    // Aqui segmos a mesma ideia da checkAuthenticated mas redirecionamos para a home quando um usuario que esta logado tenta acessar telas que nao exigem login, por exemplo 
    // a tela de cadastro ou de login
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    // Caso ele nao esteja logado ele soh continua a aplicacao normalmente
    next()
}

app.listen(PORT, () => console.log(`Node: Server running on port ${PORT}`))