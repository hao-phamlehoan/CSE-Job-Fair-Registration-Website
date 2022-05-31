const db = require('./models/Database')
let BOOTH_DATA
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