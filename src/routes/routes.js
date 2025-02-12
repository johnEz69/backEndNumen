const express= require('express')
const{getAlumnosController, addAlumnosController, getAlumnosIdController, updateAlumnoController}=require('../controllers/controller')
//configurar los router
const router=express.Router()


//configurar los router correspondientes

router.get ('/alumnos', getAlumnosController )
//logica de las rutas delegado a ->controller







//insertamos un elemento POST *
 router.post('/alumnos', addAlumnosController)



router.get('/alumnos/:id', getAlumnosIdController)//ponemos la variable en un :id o :pepito
  


router.put('/alumnos/:id', updateAlumnoController)









module.exports = router;


//paso 1

//paso 3 importamos el controlador 