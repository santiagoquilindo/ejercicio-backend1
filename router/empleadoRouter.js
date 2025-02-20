const express = require('express');
const EmpleadoController = require('../controller/EmpleadoController'); // Sin destructuring
const router = express.Router();

router.get('/empleado', EmpleadoController.obtenerEmpleado )

router.post('/empleado', EmpleadoController.insertarEmpleado )

router.put('/empleado', EmpleadoController.actualizarEmpleadobyId )

router.delete('/empleado', EmpleadoController.eliminarEmpleado )

module.exports = router; 