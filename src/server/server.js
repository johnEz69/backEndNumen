//configurar el servidor

const express= require ('express')
const server=express()
server.use(express.json()) //le permite entender a express el json del body de las peticiones





const router=require ('../routes/routes')




//prueba
server.get('/', (request,response)=>{

    response.send("prueba de servidor funcionando")
})



//ejecutar los routers, que es un enlatado de rutas. 
server.use('/',router)



//la configuraión de los routers delegado a la carpeta de routes
//productsRouter.js
//authRouter.js


module.exports=server;























/*
ROUTER PRODUCTOS


product.get()
product.post()



router => login y registro
 

REGISTRO ->POST de un objeto de usuario

login->POST -> una validación.



*/