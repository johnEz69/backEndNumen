//importamos el modulo server
const server=require('./server/server')

//llamados a la hoja confing

require('./dateBase/config')

//definir el puerto
require ('dotenv').config()


//definimos el puerto
const PORT=process.env.PORT || 8080//con esto, traemos la variable modularizada de la hoja .env










//delegar la configuracion del server a una oja llamada server.js (creamos una carpeta dentro de src llamada services que la contenga)

//escuchar el puerto
server.listen(PORT, ()=>console.log(`servidor funcionando en el puerto ${PORT}`)) 