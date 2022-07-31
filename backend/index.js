'use strict'

var mongoose = require("mongoose");
var app = require("./app");
var port = 3900;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/api_dream_skin',{useNewUrlParser: true})
        .then(() => {
            console.log("conexion exitosa...");
            // crear servidor y escuchar las peticiones http
            app.listen(port, () =>{
                console.log("servidor corriendo en localhost:"+port);
            })
        });

