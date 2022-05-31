var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '123456789',      // Replace with your database password
  database: 'cse job fair registration' // // Replace with your database Name
}); 
let BOOTH_DATA
let BUSSINESS_DATA
let REGISTRATION_DATA
let APPROVE_DATA
db.connect(function(err) {
    if (err) throw err;
    db.query("SELECT * FROM `cse job fair registration`.booth;", function (err, result, fields) {
      if (err) throw err;
      BOOTH_DATA = result
      console.log(err);
    });
    db.query("SELECT * FROM `cse job fair registration`.registration;", function (err, result, fields) {
        if (err) throw err;
        REGISTRATION_DATA = result
        console.log(err);
    });
    db.query("SELECT * FROM `cse job fair registration`.bussiness;", function (err, result, fields) {
        if (err) throw err;
        BUSSINESS_DATA = result
        console.log(err);
    });
    db.query("SELECT * FROM `cse job fair registration`.approve;", function (err, result, fields) {
        if (err) throw err;
        APPROVE_DATA = result
        console.log(err);
    });
  });
module.exports = {BOOTH_DATA , BUSSINESS_DATA, REGISTRATION_DATA, APPROVE_DATA};