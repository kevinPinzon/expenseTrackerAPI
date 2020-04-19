const Sequelize = require('sequelize');
const conecction = require('../db/connection');

//simple schema
const user = conecction.define("users", 
    {
        'name': {
            type: Sequelize.STRING,
            required: true,
            minlength: 3,
            maxlength: 255
        },
        'mail': {
            type: Sequelize.STRING,
            required: true,
            minlength: 3,
            maxlength: 255
        },
        'password': {
            type: Sequelize.STRING,
            required: true,
            minlength: 3,
            maxlength: 255
        }
    }, 
    {
        timestamps: false
    }
)

user.associate = function (models) {
    // associations go here
};

// return user;

module.exports = user;