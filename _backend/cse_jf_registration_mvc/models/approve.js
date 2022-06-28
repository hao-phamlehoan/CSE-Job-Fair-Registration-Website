const db = require('./connect')

const approve = function(approve) {
    this.time_approve = approve.time_approve;
    this.approve = approve.approve;
    this.id = approve.id;
    this.admin_id = approve.admin_id;
    this.business_id = approve.business_id;
    this.booth_id = approve.booth_id;
}

approve.get_all = function(result) {
    db.query("SELECT registration_approve.id,business_id,name,booth_id,time_approve,approve,admin_id FROM registration_approve join business WHERE business.id = registration_approve.business_id;", function(err, approve) {
        if (err) {
            result(null)
        } else {
            result(approve)
        }
    });
}
approve.getById = function(id, result) {
    db.query("SELECT registration_approve.id,business_id,name,booth_id,time_approve,approve,admin_id FROM registration_approve join business WHERE business.id = registration_approve.business_id AND registration_approve.id = ?;", id, function(err, approve) {
        console.log(approve)
        if (err || approve.length == 0) {
            result(null)
        } else {
            result(approve)
        }
    });
}
approve.add = function(newdata, result) {
    db.query("INSERT INTO registration_approve SET ?", newdata, function(err, approve) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idapprove: approve.insertId, ...newdata });
        console.log("Number of records inserted: " + approve.affectedRows)
    })
}
approve.remove = function(id, result) {
    db.query("DELETE FROM registration_approve WHERE id = ?;", id, function(err, approve) {
        if (err) {
            result(null)
        } else {
            result("Xóa approve có id: " + id + " thành công")
        }
    });
}
approve.update = function(update_data, result) {
    db.query("UPDATE registration_approve SET time_approve=?,approve=?,admin_id=? WHERE id = ?;", [update_data.time_approve, update_data.approve, update_data.admin_id, update_data.id], function(err, approve) {
        if (err) {
            result(err, null);
            return;
        }
        else result(update_data);
    }) 
}
module.exports = approve