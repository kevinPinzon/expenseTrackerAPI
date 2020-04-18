'use strict'

var express = require('express');
var PruebaController= require('../controllers/pruebaController');

var api = express.Router();
api.post('/pruebas', PruebaController.pruebas);

module.exports = api;