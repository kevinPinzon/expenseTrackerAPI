'use strict'
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

function login(req, res){
    var errors;
    const { mail, password } = req.body;
    
    if (mail == null || password == null){
        console.log('Faltan parametros');
    }

    User.findOne({
        where: {
            mail: mail,
            password: password
        },
        attributes: ['name']
    }).then(result => {
        if (result == null){
            errors = 'User not found!';
            return res.status(400).send({
                status: "Error",
                description: errors
            }); 
        }
        var data = result.toJSON();
        const playload = { user: data.name, pass: password};
        const token =  jwt.sign(playload, config.key,{
            expiresIn: 3600
        });
        
        data.token= token;//Agreganso el key token al array
        res.status(200).send({
            status: "Success",
            description: data
        });
        
    }).catch(err => {
        console.log('Error', err);
        res.status(500).send({
            status: "Error",
            description: err
        });
    });
};

module.exports = {
    login
};