require('dotenv').config();
require('./models');
const express = require('express');
const app = express();
const fs = require('fs');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : process.env.host,
    user     : process.env.user,
    password : process.env.password,
    database : process.env.database
});
connection.connect();

app.use(fileUpload());

const shieldfy= require('shieldfy-nodejs-client');
shieldfy.start();

app.get('/', function (req, res) {
    res.end('HELLO SHIELDFY')
})

app.get('/user', function (req, res) {
    var name = req.query.name;
    connection.query(`SELECT * FROM users WHERE name = "${name}" `, function (error, results, fields) {
        // if (error) throw error;
        if (error) {
            console.log(error);
            res.end('ERROR');
        }
        
        if (results.length > 0) {
            res.end(`HELLO ${results[0].name}`);
        } else {
            res.end('USER NOT FOUND')
        }
    });
})

app.post('/user', function (req, res) {
    connection.query(`SELECT * FROM users WHERE name = "${req.body.name}" `, function (error, results, fields) {
        // if (error) throw error;
        if (error) {
            console.log(error);
            res.end('ERROR');
        }
        
        if (results.length > 0) {
            res.end("USER ALREADY EXIST");
        } else {
            connection.query(`INSERT INTO users SET name = "${req.body.name}"`, function (error, results) {
                // if (error) throw error;
                if (error) {
                    console.log(error);
                    res.end('ERROR');
                }
                    res.end('USER ADDED SUCCESSFULY')
            });
        }
    });
})

app.get('/file', function (req, res) {
    var name = req.query.name;
    fs.readFile(`${__dirname}/upload/${name}`, (err, data) => {
        // if (err) throw err;
        if (err) {
            console.log(err);
        }

        if (data) {
            res.end(data)
        } else {
            res.end('FILE NOT FOUND')
        }
    });
})

app.post('/file', function (req, res) {
    if (req.files.file) {
        fs.writeFile(`${__dirname}/upload/${req.files.file.name}`, req.files.file.data.toString(), (err) => {
            // if (err) throw err;
            if (err) {
                console.log(err);
                res.end('UPLOAD FAILED');
            }
            res.end('UPLOAD SUCCESS');
        });
    } else {
        res.end('UPLOAD FAILED');
    }
})

app.listen(3000, () => console.log("app listening on port 3000..."))