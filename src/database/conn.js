let mysql = require('mysql');
let con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testsample'
});

module.exports = con;