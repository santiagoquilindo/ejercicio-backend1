const express = require('express');
const router = express.Router();

// Ruta para obtener un mensaje simple
router.get('/', (req, res) => {
    res.json({ mensaje: 'Hola, soy el mensaje del GET' });
});

module.exports = router;