'use strict'
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TurnoSchema = Schema({
    hora: String,
    nombre_completo: String,
    zonas: String,
    fecha: String,
    precio: Number
});

module.exports = mongoose.model('turno', TurnoSchema);