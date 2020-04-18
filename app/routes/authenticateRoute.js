'use strict'

var express = require('express');
var authController = require('../controllers/authenticateController');

var api = express.Router();
api.post('/auth', authController.login);

module.exports = api;