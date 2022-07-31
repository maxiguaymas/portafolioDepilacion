'use strict'
var validator = require("validator");
var Turno = require("../models/turno");

var controller = {
 // rutas del api
    prueba: (req,res) =>{
        
        return res.status(200).send({message: 'exito'});
    },
    test: (req,res) =>{
        
        return res.status(200).send({message: 'exito en test'});
    },
    saveTurno: (req,res) =>{
        // recoger parametros por post
        var params = req.body;


        // validar datos(validator)
        try {
            var validate_hora = !validator.isEmpty(params.hora);
            var validate_nombre_completo = !validator.isEmpty(params.nombre_completo);
            var validate_zonas = !validator.isEmpty(params.zonas);
            var validate_fecha = !validator.isEmpty(params.fecha);
        } catch (error) {
            return res.status(200).send({message: "faltan datos por enviar"});
        };

        if(validate_hora && validate_nombre_completo && validate_zonas && validate_fecha){
            // crear el objeto a guardar
            var turno = new Turno();
             // asignar valores
            turno.hora = params.hora;
            turno.nombre_completo = params.nombre_completo;
            turno.zonas = params.zonas;
            turno.fecha = params.fecha;
            turno.precio = params.precio;

            // guardar el articulo
            turno.save((error,turnoStored) =>{
                if(error | !turnoStored){
                    return res.status(404).send({message: "faltan datos por enviar"});
                };
                // devolver una respuesta
                return res.status(200).send({message: 'success',turnoStored});
            })

            
        }
        else{
            return res.status(200).send({message: "faltan datos por enviar"});
        }
        


        
    },
    getTurnos: (req,res) => {
        // find
        Turno.find({}).exec((error, turnos) => {
            if(error){
                return res.status(500).send({message: "error al obtener turnos"});
            }

            if(!turnos){
                return res.status(404).send({message: "no hay turnos"});
            }

            return res.status(200).send({message: "exito",turnos});
        })
        
    },
    getTurno: (req,res) => {
        // recoger el id por url
        var turno_id = req.params.id;
        // comprobar que existe
        if(!turno_id || turno_id == null){
            return res.status(404).send({message: "no se encontro el turno buscado"});
        }
        // buscamos el articulo
        Turno.findById(turno_id,(error, turno) =>{
            if(error || !turno){
                return res.status(404).send({message: "no existe el turno"});
            }
            // devolvemos el turno
            return res.status(200).send({message: "exito al obtener turno",turno});
        });

    },
    updateTurno: (req,res) => {
        // recoger el id por url
        var turno_id = req.params.id;
        // recoger los datos que llegan por put
        var params = req.body;
        
        // validar datos
        try {
            var validate_hora = !validator.isEmpty(params.hora);
            var validate_nombre_completo = !validator.isEmpty(params.nombre_completo);
            var validate_zonas = !validator.isEmpty(params.zonas);
            var validate_fecha = !validator.isEmpty(params.fecha);
        } catch (error) {
            return res.status(200).send({message: "faltan datos por enviar"});
        };


        if(validate_hora && validate_nombre_completo && validate_zonas && validate_fecha){
            // find and update
            Turno.findByIdAndUpdate(turno_id, params, {new: true},(error, turnoUpdate) => {
                if(error || !turnoUpdate){
                    return res.status(500).send({message: "ha ocurrido un error"});
                }
                return res.status(200).send({message: "exito al editar turno",turnoUpdate});

            });
        }
        else{
            return res.status(200).send({message: "faltan datos por enviar"});
        }
        
    },
    delete: (req,res) => {
        Turno.deleteMany({}, (error,turnos) => {
            if (error || !turnos){
                return res.status(404).send({message: "error al eliminar la lista"});
            }
            return res.status(200).send({message: "exito al eliminar turnos"});
        })
        
    }
}

module.exports = controller;