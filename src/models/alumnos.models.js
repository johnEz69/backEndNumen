//los objetos que se van a insertar en la base de datos, se van a basar en este modelo. Ejemplo, card se va a basar en este modelo.

//esquema

const { mongoose, Schema } = require("mongoose");

const AlumnosSchema = Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },

  dni: { type: Number, required: true },
  curso: { type: String, required: true },
});

const modeloDeAlumnos = mongoose.model("alumnos", AlumnosSchema); //creamos un modelo

module.exports = modeloDeAlumnos;
