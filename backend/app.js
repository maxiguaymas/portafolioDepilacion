'use strict'

// cargar modulos de node para crear el servidor
var express = require("express");
var bodyParser = require("body-parser");


// ejecutar express (http)
var app = express();

//cargar ficheros rutas
var turnoRoutes = require("./routes/turno");

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// añadir prefijos a rutas (cargar rutas)
app.use('/api',turnoRoutes);


// exportar modulo app
module.exports = app;