const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());


app.post('/servidor', (req, res) => {
  const datos = req.body;

  console.log(datos['nombre']);

  const connection = mysql.createConnection({
    server: 'localhost',
    database: 'pub',
    port: '3306',
    user: 'root',
    password: ''
    });

    connection.connect(function(err){
        if(err) {
            throw err;
        } else {
            console.log("Conexión exitosa");
        }
    });

    connection.query("INSERT INTO clientes (Nombre, Apellido, Numero, Correo) VALUES (?, ?, ?, ?)", [datos['nombre'], datos['apellido'], datos['numero'], datos['correo']]);

    connection.query("SELECT Nombre FROM clientes WHERE Nombre = ?", datos['nombre'], function(error, lista){
        if(error){
            throw error;
        } else {
            console.log(lista);
        }
    });

    res.send("Datos recibidos correctamente")
});

app.listen(3000, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});