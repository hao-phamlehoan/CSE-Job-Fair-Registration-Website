const db = require('./connect')

const register = function(register) {
    this.id = register.id;
    this.time_register = register.time_register;
    this.business_id = register.business_id;
    this.booth_id = register.booth_id;
}

register.get_all = function(result) {
    db.query("SELECT id,business_id,booth_id,time_register FROM registration_approve;", function(err, register) {
        if (err) {
            result(null)
        } else {
            result(register)
        }
    });
}
register.getById = function(id, result) {
    db.query("SELECT id,business_id,booth_id,time_register FROM registration_approve WHERE id = ?;", id, function(err, register) {
        console.log(register)
        if (err || register.length == 0) {
            result(null)
        } else {
            result(register)
        }
    });
}
register.add = function(newdata, result) {
    db.query("INSERT INTO register  SET ?", newdata, function(err, register) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idregister: register.insertId, ...newdata });
        console.log("Number of records inserted: " + register.affectedRows)
    })
}
register.remove = function(id, result) {
    db.query("DELETE FROM register WHERE id = ?;", id, function(err, register) {
        if (err) {
            result(null)
        } else {
            result("Xóa register có id: " + id + " thành công")
        }
    });
}
module.exports = register