const db = require('./connect')

const Business = function(business) {
    this.idbusiness = business.idbusiness
    this.name = business.name
    this.phone = business.phone
    this.email = business.email
    this.representation_name = business.representation_name
    this.password = business.password
}

Business.get_all = function(result) {
    db.query("SELECT * FROM `cse job fair registration`.business;", function(err, business) {
        if (err) {
            result(null)
        } else {
            result(business)
        }
    });
}
Business.getById = function(id, result) {
    db.query("SELECT * FROM `cse job fair registration`.business WHERE idbusiness = ?;", id, function(err, business) {
        console.log(business)
        if (err || business.length == 0) {
            result(null)
        } else {
            result(business)
        }
    }); 
}
Business.add = function(newdata, result) {
    db.query("INSERT INTO `cse job fair registration`.business SET ?", newdata, function(err, business) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idbusiness: business.insertId, ...newdata });
        console.log("Number of records inserted: " + business.affectedRows)
    })
}
Business.remove = function(id, result) {
    db.query("DELETE FROM `cse job fair registration`.business WHERE idbusiness = ?;", id, function(err, business) {
        if (err) {
            result(null)
        } else {
            result("Xóa business có id: " + id + " thành công")
        }
    });
}
Business.update = function(update_data, result) {
    db.query("UPDATE `cse job fair registration`.business SET name=?,phone=?,email=?,representation_name=?,password=? WHERE idbusiness = ?;", [update_data.name, update_data.phone, update_data.email, update_data.representation_name, update_data.password, update_data.idbusiness], function(err, business) {
        if (err) {
            result(err, null);
            return;
        }
        result(update_data);
    })
}

  
module.exports = Business