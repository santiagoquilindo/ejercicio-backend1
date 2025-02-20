const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    // aqui donde dice expressdb es el //
    //nombre de la base de datos en mysql//
    database: "expressdb",
});

module.exports = pool.promise();