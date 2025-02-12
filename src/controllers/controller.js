const { request } = require("express");
const {
  getAlumnosService,
  addAlumnosService,
  getAlumnosIdService,
  updateAlumnosService,
  deleteAlumnoService,
} = require("../services/service");

const getAlumnosController = async (request, response) => {
  const todosLosAlumnos = await getAlumnosService(request); //con esto consigo la listo de la base de datos

  //puede devolver una lista
  //puede devolver un error

  response.json(todosLosAlumnos);
};

const getAlumnosIdController = async (request, response) => {
  const alumnoPorId = await getAlumnosIdService(request); //creamos un servicio que derivamos a

  response.json(alumnoPorId);
};

//POST
const addAlumnosController = async (request, response) => {
  const nuevoAlumno = addAlumnosService(request); //inserta un alumno en la colección

  response.json(nuevoAlumno);
};

// POST POR id

const updateAlumnoController = async (request, response) => {
  const alumnoEditado = updateAlumnosService(request); //inserta un alumno en la colección

  response.json(alumnoEditado);
};

const deleteAlumnoController = async (request, response) => {
  const alumnoEliminado = deleteAlumnoService(request); //inserta un alumno en la colección

  response.json(alumnoEliminado);
};

deleteAlumnoController;

//paso 2

//logica del controlador->delegada -> al service

//respuesta al front

module.exports = {
  getAlumnosController, //tenemos que exportarlo como objeto.
  addAlumnosController,
  getAlumnosIdController,
  updateAlumnoController,
  deleteAlumnoController,
};
