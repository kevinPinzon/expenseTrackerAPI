var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var prueba_routes = require('./app/routes/pruebaRoutes');

//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routes
app.use('/api', prueba_routes);

module.exports = app;