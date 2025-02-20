const express = require('express');
const EmpresaController = require('../controller/empresaController'); // Sin destructuring
const router = express.Router();

router.get('/empresa', EmpresaController.obtenerEmpresa )

module.exports = router;