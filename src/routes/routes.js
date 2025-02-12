const express = require("express");
const {
  getAlumnosController,
  addAlumnosController,
  getAlumnosIdController,
  updateAlumnoController,
  deleteAlumnoController,
} = require("../controllers/controller");
//configurar los router
const router = express.Router();

//configurar los router correspondientes

router.get("/alumnos", getAlumnosController);
//logica de las rutas delegado a ->controller

//insertamos un elemento POST *
router.post("/alumnos", addAlumnosController);

//pedimos el objeto
router.get("/alumnos/:id", getAlumnosIdController); //ponemos la variable en un :id o :pepito

// editamos el objeto
router.put("/alumnos/:id", updateAlumnoController);

router.delete("/alumnos/:id", deleteAlumnoController);

module.exports = router;

//paso 1

//paso 3 importamos el controlador
