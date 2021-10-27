const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

// crear el servidor de express
const app = express();

//Base de datos
dbConnection();
//cors
app.use(cors());

//Directorio Publico
app.use(express.static("public"));
//Lectura y parseo del body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rutas
app.use("/api/events", require("./routes/events")); // todo lo que este archivo va a exportar lo va a habilitar en esta ruta

// escuchar las peticiones: en que puerto lo vamos a levantar
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${4000} `);
});

// Usuario mongodb
// user: mern_user,
// clave: mongodb+srv:y9kaxDeT3sHHZANV
