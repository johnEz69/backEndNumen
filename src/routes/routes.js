const express = require("express");
const {
  getAlumnosController,
  addAlumnosController,
  getAlumnosIdController,
  updateAlumnoController,
  deleteAlumnoController,
  
  
} = require("../controllers/controller");


const checkAlumnosType =require('../utils/checkAlumnosType')//importamos desde checkaAlumnosType, el middewade



const { getClimaController } = require('../controllers/climaController'); // FUNCION IMPORTADA

//configurar los router
const router = express.Router();

//configurar los router correspondientes
       
router.get("/alumnos", getAlumnosController);
//logica de las rutas delegado a ->controller

//insertamos un elemento POST *
router.post("/alumnos",checkAlumnosType, addAlumnosController);

//pedimos el objeto
router.get("/alumnos/:id", getAlumnosIdController); //ponemos la variable en un :id o :pepito

// editamos el objeto
router.put("/alumnos/:id", updateAlumnoController);

router.delete("/alumnos/:id", deleteAlumnoController);



router.get('/clima/:ciudad', getClimaController); // API A CONSUMIR (1)

module.exports = router;

//paso 1

//paso 3 importamos el controlador
