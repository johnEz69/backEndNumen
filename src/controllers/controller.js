const {getAlumnosService, addAlumnosService}= require ('../services/service')

const getAlumnosController  =async(request, response)=>{

   const todosLosAlumnos= await getAlumnosService(request)//con esto consigo la listo de la base de datos


  //puede devolver una lista
  //puede devolver un error

   response.json(todosLosAlumnos)

   


}

//POST
const addAlumnosController = async(request, response)=>{
    


 const nuevoAlumno= addAlumnosService(request)//inserta un alumno en la colección

   response.json(nuevoAlumno)

}











//logica del controlador->delegada -> al service

//respuesta al front



module.exports = { 

    getAlumnosController, //tenemos que exportarlo como objeto.
    addAlumnosController 


}
