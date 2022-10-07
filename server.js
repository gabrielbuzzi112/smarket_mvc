const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');

const passport = require('passport');
const session = require('express-session');
require('./auth')(passport);


const app = express();


app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors(corsOptions));

app.use(session({
    secret: '123', //Colocar em variavel de ambiente
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 15*60*1000} //2*60*1000 = 2 minutos 30*60*1000 = 30 minutos
}));

app.use(passport.initialize());
app.use(passport.session());

// Rotas Publicas
app.use('/', require('./routes/root'));
app.use('/cadastro', require('./routes/cadastro'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));



app.use('/clientes', authenticationMiddleware, require('./routes/clientes'));


app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

function authenticationMiddleware(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
}

app.listen(PORT, () => console.log(`Node: Server running on port ${PORT}`));