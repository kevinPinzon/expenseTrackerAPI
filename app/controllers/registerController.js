'use strict'
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

function register(req, res) {
    var errors;
    const { name, mail, password } = req.body;

    if (name == null || mail == null || password == null) {
        const err = 'error missing required parameters'
        console.log(err);
        return res.status(400).send({
            status: "Error",
            description: err
        });
    }

    User.upsert(
        {
            name: name,
            mail: mail,
            password: password,
        }
    ).then(result => {
        if (result == null) {
            console.log("Error", result)
            errors = 'Err temporary problem please try again later';
            return res.status(400).send({
                status: "Error",
                description: errors
            });
        }
        if (result){
            var data = {
                token : ''
            };
            const playload = { user: name, pass: password };
            const token = jwt.sign(playload, config.key, {
                expiresIn: 3600
            });
            data.token = token;//Agreganso el key token al array
            res.status(200).send({
                status: "Success",
                description: data
            });
        }

    }).catch(err => {
        console.log('Error', err);
        errors = 'Err temporary problem please try again later';
        res.status(500).send({
            status: "Error",
            description: errors
        });
    });
};

module.exports = {
    register
};