const db = require('./connect')
 
const Business = function(business) {
    this.idbusiness = business.idbusiness
    this.nickname= business.nickname
    this.phone_representation = business.phone_representation
    this.pmail_representation= business.mail_representation
    this.address = business.address
    this.username = business.username
    this.password = business.password
}

Business.get_all = function (result) {
    db.query("SELECT * FROM `cse job fair registration`.business;", function (err, business){
        if(err){
            result(null)
        } else {
            result(business)
        }
    });
}
Business.getById = function ( id,result){
    console.log(id)
    db.query("SELECT * FROM `cse job fair registration`.business WHERE idbusiness = ?;",id ,  function (err, business){
        console.log(business)
        if(err || business.length == 0){
            result(null)
        }else {
            result(business)
        }
    });
}
Business.add = function (newdata , result){
    db.query("INSERT INTO `cse job fair registration`.business SET ?", newdata ,function (err, business){
        if (err){
            result(err,null);
            return;
        }
        result(null , {idbusiness : business.insertId , ...newdata});        
        console.log("Number of records inserted: " + business.affectedRows)
    })
}
module.exports = Business