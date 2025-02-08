const express= require('express')
const {mostrarMensajitoController}= require('../controllers/controller')//lo importamos como objeto. 


//configurar los router
const router=express.Router()


//configurar los router correspondientes

router.get ('/card', mostrarMensajitoController )
//logica de las rutas delegado a ->controller


module.exports = router;