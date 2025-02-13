const checkAlumnosType =(request, response, next)=>{
    const alumno1=request.body

   const arrayOfValidation=[];


   if (typeof alumno1.nombre !=="string")arrayOfValidation.push("nombre debe ser un string");
   if (typeof alumno1.apellido !=="string")arrayOfValidation.push("apellido debe ser un string");
   if (typeof alumno1.email !=="string")arrayOfValidation.push("email debe ser un string");
   if (typeof alumno1.dni !=="number")arrayOfValidation.push("dni debe ser un number");
   if (typeof alumno1.curso !=="string")arrayOfValidation.push("curso debe ser un string");
   
   if (arrayOfValidation.length>0){
      return response.json({
       statusCode:400,
       message: "Error de tipo de dato",
       arrayOfValidation 

        })
    
     

   }

   next(); //pasamos a la siguiente instancia. 
    
   
//llevan tres parametros, objeto de peticion
//objeto de respuesta
//next se ejecuta si sale todo bien


/*
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },

  dni: { type: Number, required: true },
  curso: { type: String, required: true },


*/
}
module.exports = checkAlumnosType;



