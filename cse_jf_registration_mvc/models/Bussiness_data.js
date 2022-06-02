const db = require('../models/connect')
 
const Bussiness = function(bussiness) {
    this.idbussiness = bussiness.idbussiness
    this.nickname= bussiness.nickname
    this.phone_representation = bussiness.phone_representation
    this.pmail_representation= bussiness.mail_representation
    this.address = bussiness.address
    this.username = bussiness.username
    this.password = bussiness.password
}

Bussiness.get_all = function (result) {
    db.query("SELECT * FROM `cse job fair registration`.bussiness;", function (err, bussiness){
        if(err){
            result(null)
        } else {
            result(bussiness)
        }
    });
}
Bussiness.getById = function ( id,result){
    console.log(id)
    db.query("SELECT * FROM `cse job fair registration`.bussiness WHERE idbussiness = ?;",id ,  function (err, bussiness){
        console.log(bussiness)
        if(err || bussiness.length == 0){
            result(null)
        }else {
            result(bussiness)
        }
    });
}
Bussiness.add = function (newdata , result){
    db.query("INSERT INTO `cse job fair registration`.bussiness SET ?", newdata ,function (err, bussiness){
        if (err){
            result(err,null);
            return;
        }
        result(null , {idbussiness : bussiness.insertId , ...newdata});        
        console.log("Number of records inserted: " + bussiness.affectedRows)
    })
}
module.exports = Bussiness