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
    db.query("SELECT * FROM business;", function(err, business) {
        if (err) {
            result(null)
        } else {
            result(business)
        }
    });
}
Business.getById = function(id, result) {
    db.query("SELECT * FROM business WHERE id = ?;", id, function(err, business) {
        if (err || business.length == 0) {
            result(null)
        } else {
            result(business)
        }
    }); 
}
Business.add = function(newdata, result) {
    db.query("INSERT INTO business SET ?", newdata, function(err, business) {
        if (err) {
            result(err, null);
            return;
        }
        result({ id: business.insertId, ...newdata });
        console.log("Number of records inserted: " + business.affectedRows)
    })
}
Business.remove = function(id, result) {
    db.query("DELETE FROM business WHERE id = ?;", id, function(err, business) {
        if (err) {
            result(err)
        } else {
            result("Xóa business có id: " + id + " thành công")
        }
    });
}
Business.update = function(update_data, result) {
    db.query("UPDATE business SET name=?,phone=?,email=?,representation=?,password=? WHERE id = ?;", [update_data.name, update_data.phone, update_data.email, update_data.representation, update_data.password, update_data.id], function(err, business) {
        if (err) {
            result(err, null);
            return;
        }
        result(update_data);
    })
}
Business.maxid = function(result){
    db.query("select MAX(id) AS MaxId from business;", function(err, business){
        if(err) {
            result(err, null);
        }
        result(business[0].MaxId);
    })
}
  
module.exports = Business