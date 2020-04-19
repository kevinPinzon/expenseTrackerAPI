var express= require('express');
var expressToken = express();
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const validateToken = expressToken.use((req, res, next) => {
    var errors;
    const params = JSON.parse(JSON.stringify(req.body));
    if(params.hasOwnProperty('mail') && params.hasOwnProperty('password') ||
        params.hasOwnProperty('name') && params.hasOwnProperty('mail') && params.hasOwnProperty('password')){
        next();
    } else {
        const token = req.headers['access-token'];
        if (token) {
            jwt.verify(token, config.key, (err, decoded) => { 
                if (err) {
                    errors = 'Authentication error. ';
                    res.status(401).send({
                        status: "Error",
                        description: errors
                     });  
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }else{
            res.status(400).send({
                status: "Error",
                description: "Token not found."
            });  
        }
    }
});

module.exports = validateToken;