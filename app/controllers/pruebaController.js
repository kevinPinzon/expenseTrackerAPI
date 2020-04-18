'use strict'

//Esta solo es una función para probar la validación del token
function pruebas(req, res){

    res.status(200).send({
        status: "Success"
    });  
};

module.exports = {
    //Nombre de las funciones creadas en este controlador
    pruebas
 };