var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var prueba_routes = require('./app/routes/pruebaRoutes');
var auth_routes = require('./app/routes/authenticateRoute');
const validateToken = require('./app/functions/validateTokenFunction');

//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(validateToken);
//Routes
app.use('/api', prueba_routes);
app.use('/api', auth_routes);

module.exports = app;