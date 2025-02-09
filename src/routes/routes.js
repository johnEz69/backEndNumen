const express= require('express')
const{getAlumnosController, addAlumnosController}=require('../controllers/controller')
//configurar los router
const router=express.Router()


//configurar los router correspondientes

router.get ('/alumnos', getAlumnosController )
//logica de las rutas delegado a ->controller


//insertamos un elemento POST *
 router.post('/alumnos', addAlumnosController)






module.exports = router;


