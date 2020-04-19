var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var auth_routes = require('./app/routes/authenticateRoute');
var register_routes = require('./app/routes/registerRoute');
const validateToken = require('./app/functions/validateTokenFunction');

//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(validateToken);

//Routes
app.use('/api', auth_routes);
app.use('/api', register_routes);

module.exports = app;