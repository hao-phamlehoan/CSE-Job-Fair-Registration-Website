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

module.exports = Bussiness