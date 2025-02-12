//configuración para conectar a la base de datos de MongoBD

//importamos el modulo de la libreria mongoose que importamos para conectarnos a la base de datos
const mongoose = require("mongoose");

require("dotenv").config();

const DATABASE = process.env.DATABASE_URL;

//console.log("DATABASE_URL:", process.env.DATABASE_URL);

//funcion para conectarnos a la base de datos

const connect = async () => {
  try {
    mongoose.connect(DATABASE);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

connect();
