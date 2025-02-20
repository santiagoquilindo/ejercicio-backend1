const express = require('express');
const app = express();

app.use("/api", require('./router/empleadoRouter'))
app.use("/api", require("./router/empresaRouter"))

const PORT = 9090
app.listen(PORT, () => {
    console.log( `servidor corriendo en puerto: ${PORT}`);
});