let db = require("../config/database")
class EmpresaController {
    static async obtenerEmpresa(req, res) {
        let lista = await db.query("SELECT * FROM empresa") 
        res.json(lista)
    }

}
module.exports = EmpresaController;