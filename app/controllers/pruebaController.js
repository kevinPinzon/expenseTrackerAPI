'use strict'
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

//Esta solo es una función para probar la validación del token
function pruebas(req, res){

    const {user, pass} = req.body;
    console.log(user,pass);
   
    //console.log(usuario, password);
    res.status(200).send({
        status: "Success",
        data: req.body,
    });  
};

module.exports = {
    //Nombre de las funciones creadas en este controlador
    pruebas
 };