const Sequelize = require('sequelize')

var opts = {
  define: {
    freezeTableName: true//prevent sequelize from pluralizing table names
  }
}

const conecction = new Sequelize('postgres://postgres:101@localhost:6262/postgres',opts);

conecction.authenticate()
  .then(() => {
    console.log('Conectado!')
  })
  .catch(err => {
    console.log('No se conecto', err)
  })

module.exports = conecction;