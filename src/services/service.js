//importo el modelo 
const modeloDeAlumnos= require('../models/alumnos.models');
const { request, response } = require('../server/server');

//logica del controlador

const getAlumnosService = async(request, response)=>{
//consultamos a la base de datos por la lista de elementos de la coleccion alumnos
const todosLosAlumnos= await modeloDeAlumnos.find()
return todosLosAlumnos;
  
}

const getAlumnosIdService = async(request, response)=>{
   //pasa poder encontrar un auto en la colección, necesitamos obtener
   //el id del auto que necesitamos
   
     const {id}= request.params;
     

   
     
     const alumnoPorId = modeloDeAlumnos.findById(id);

     if(!alumnoPorId){

       return {message:"No se encontro al alumno", statusCode: 404}

     }
      
      return alumnoPorId


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
    return {messege:"ocurrio un error ", statusCode:400}
  }





  
  }


//paso 4 creamos el servicio 




const updateAlumnosService =async (request, response)=>{
  const {id}= request.params;
  const alumnoEditado =request.body;

   try {
    const alumnoPorId = await modeloDeAlumnos.findById(id);
    if(!alumnoPorId){

      return {message:"No se encontro al alumno", statusCode: 404}

    }

    //queremos sobreescribir propiedad por propiedad de los alumnos

    alumnoPorId.nombre=alumnoEditado.nombre;
    alumnoPorId.apellido=alumnoEditado.apellido;
    alumnoPorId.email=alumnoEditado.email;
    alumnoPorId.dni=alumnoEditado.dni;
    alumnoPorId.curso=alumnoEditado.curso;

    console.log(alumnoPorId)

    await alumnoPorId.save()



     


    return {messege:"Alumno editado exitosamente", statusCode:201}

   } catch (error) {
    return {messege:"ocurrio un error ", statusCode:400}
   }
 
}













module.exports={

  getAlumnosService,
  addAlumnosService,
  getAlumnosIdService,
  updateAlumnosService  // luego lo importamos en el controlador


}

//revisar

