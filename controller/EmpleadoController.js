let db = require("../config/database")

class EmpleadoController {
    static async obtenerEmpleado(req, res) {
            let [lista] = await db.query("SELECT * FROM usuario")
            res.json(lista)
            }

    static async insertarEmpleado(req, res) {
        let { nombre, apellido, identificacion, email, contraseña } = req.body;
        await db.query("INSERT INTO usuario(nombre, apellido, identificacion, email, contrasena) VALUES(?,?,?,?,?)", [nombre, apellido, identificacion, email, contrasena])
    }

    static async actualizarEmpleadobyId(req, res) {
        let { id } = req.params
        let { nombre, apellido, identificacion, email, contrasena } = req.body
        await db.query("UPDATE usuario SET nombre=?, apellido=?, identificacion=?, email=?, contrasena=? WHERE id=?", [nombre, apellido, identificacion, email, contrasena, id])
    }

    static async eliminarEmpleado(req, res) {
        let { id } = req.params;
        
        await db.query("DELETE FROM usuario WHERE id = ?", [id])
    }

    static buscarEmpleado(req, res) {
        let {id } = req.params
        res.send("buscar")
    }

}



module.exports = EmpleadoController;