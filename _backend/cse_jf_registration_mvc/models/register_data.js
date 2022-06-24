const db = require('./connect')

const register = function(register) {
    this.id = register.id;
    this.time_register = register.time_register;
    this.business_id = register.business_id;
    this.booth_id = register.booth_id;
}

register.get_all = function(result) {
    db.query("SELECT registration_approve.id,name,business_id,booth_id,time_register FROM registration_approve join business Where business.id = business_id;", function(err, register) {
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
register.getByIdbooth = function(id, result) {
    db.query("SELECT name,email,time_register,approve FROM registration_approve join business WHERE business.id = registration_approve.business_id AND booth_id = ? ", id, function(err, register) {
        console.log(register)
        if (err || register.length == 0) {
            result(null)
        } else {
            result(register)
        }
    });
}
register.getByIdbusiness = function(id, result) {
    db.query("SELECT registration_approve.id,booth_id,time_register,approve, time_approve FROM registration_approve join business WHERE business.id = registration_approve.business_id AND business_id = ? ", id, function(err, register) {
        console.log(register)
        if (err || register.length == 0) {
            result(null)
        } else {
            result(register)
        }
    });
}
register.add = function(newdata, result) {
    db.query("INSERT INTO registration_approve  SET ?", newdata, function(err, register) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idregister: register.insertId, ...newdata });
        console.log("Number of records inserted: " + register.affectedRows)
    })
}
register.remove = function(id, result) {
    db.query("DELETE FROM registration_approve WHERE id = ?;", id, function(err, register) {
        if (err) {
            result(err)
        } else {
            result("Xóa register có id: " + id + " thành công")
        }
    });
}
register.maxid = function(result){
    db.query("select MAX(id) AS MaxId from registration_approve;", function(err, business){
        if(err) {
            result(err, null);
        }
        result(business[0].MaxId);
    })
}
module.exports = register