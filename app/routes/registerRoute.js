'use strict'

var express = require('express');
var registerController = require('../controllers/registerController');

var api = express.Router();
api.post('/register', registerController.register);

module.exports = api;