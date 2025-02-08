const mostrarMensajitoController=(request, response)=>{
// la logica del controlador ("insertar producto en la DB") -> SE DELEGA A SERVICE.JS PARA SER REUTILIZADA

response.send ("aca van autitos")


}



//logica del controlador->delegada -> al service

//respuesta al front



module.exports = { 

mostrarMensajitoController //tenemos que exportarlo como objeto. 


}
