const Sequelize = require('sequelize')

const db = new Sequelize(
    'userdb', // database name
    'userdb', // username
    'userdb',  // password
    {
        host: 'localhost',
        dialect:'mysql'
    }
)

const Users = db.define('users',{

    username:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    firstName : Sequelize.STRING,
    lastName : Sequelize.STRING
})

db.sync().then(console.log('database ready '))


exports = module.exports = {
    db,Users
}