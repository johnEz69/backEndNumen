//importo el modelo 
const modeloDeAlumnos= require('../models/alumnos.models')

//logica del controlador

const getAlumnosService = async(request, response)=>{
//consultamos a la base de datos por la lista de elementos de la coleccion alumnos
const todosLosAlumnos= await modeloDeAlumnos.find()
return todosLosAlumnos;
  
}

//logica del controlador para añadir un elemento al array
const addAlumnosService = async(request, response)=>{
  //consulta de inserción

  const alumnoX= request.body //aca esta el alumno nuevo
  // console.log ('alumno ',alumnoX) <- deberia estar en formato javascript, objeto javascrip, pero en consola aparece como el modelo de esquema requerido para estar en la base de datos(?)
  try {
    
     const nuevoAlumno =new modeloDeAlumnos (alumnoX)

     //console.log('nuevoAlumno', nuevoAlumno) ->sale bien, en json para insertar en la base de datos
      await nuevoAlumno.save()
      return {messege:"Alumno ingresado exitosamente", statusCode:201}//201 se da cuando un post es bien generado

  } catch (error) {
    return {messege:"ocurrio un error", statusCode:400}
  }





  
  }



module.exports={

  getAlumnosService,
  addAlumnosService


}

//revisar

