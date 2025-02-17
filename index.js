const express = require('express');
const app = express();
const puerto = 2000;

// Middleware para interpretar JSON
app.use(express.json());

// Importar rutas
const areaRoutes = require('./Area');
const empleadoRoutes = require('./Empleado');
const empresaRoutes = require('./Empresa');

// Usar rutas en el servidor
app.use('/area', areaRoutes);
app.use('/empleado', empleadoRoutes);
app.use('/empresa', empresaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Express funcionando con normalidad');
});

// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
