'use strict'

var express = require("express");

var turnoController = require("../controllers/turno");

var router = express.Router();

router.get('/test',turnoController.test);
router.post('/prueba',turnoController.prueba);
router.post('/save-turno',turnoController.saveTurno);
router.get('/get-turnos',turnoController.getTurnos);
router.get('/get-turno/:id',turnoController.getTurno);
router.put('/update-turno/:id',turnoController.updateTurno);
router.delete('/delete-turnos',turnoController.delete);

module.exports = router;