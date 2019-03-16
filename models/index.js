var Sequelize = require("sequelize");

var sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    host: process.env.host,
    dialect: 'mysql'
});

const User = sequelize.define('user', {
    name: Sequelize.STRING,
    // password: Sequelize.STRING,
});

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

sequelize
.sync( /*{ force: true }*/ ) // Force To re-initialize tables on each run
.then(function (err) {
    console.log('It worked!');
}, function (err) {
    console.log('An error occurred while creating the table:', err);
})