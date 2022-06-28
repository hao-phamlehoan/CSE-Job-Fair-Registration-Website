const db = require('./connect')

const booth = function(booth) {
    this.id = booth.id;
    this.size = booth.size;
    this.price = booth.price;
    this.owner = booth.owner;
}

booth.get_all = function(result) {
    db.query("SELECT * FROM booth;", function(err, booth) {
        if (err) {
            result(null)
        } else {
            result(booth)
        }
    });
}
booth.getById = function(id, result) {
    db.query("SELECT * FROM booth WHERE id = ?;", id, function(err, booth) {
        console.log(booth)
        if (err || booth.length == 0) {
            result(null)
        } else {
            result(booth)
        }
    });
}
booth.getById_business = function(id, result) {
    db.query("SELECT * FROM booth WHERE owner = ?;", id, function(err, booth) {
        console.log(booth)
        if (err || booth.length == 0) {
            result(err)
        } else {
            result(booth)
        }
    });
}
booth.add = function(newdata, result) {
    db.query("INSERT INTO booth SET ?", newdata, function(err, booth) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idbooth: booth.insertId, ...newdata });
        console.log("Number of records inserted: " + booth.affectedRows)
    })
}
booth.remove = function(id, result) {
    db.query("DELETE FROM booth WHERE id = ?;", id, function(err, booth) {
        if (err) {
            result(null)
        } else {
            result("Xóa booth có id: " + id + " thành công")
        }
    });
}

booth.update = function(update_data, result) {

    db.query("UPDATE booth SET size=?,price=?,owner=? WHERE id = ?;", [update_data.size, update_data.price, update_data.owner, update_data.id], function(err, booth) {

        if (err) {
            result(err, null);
            return;
        }
        result(update_data);
    })
}
booth.owner = function(update_data, result) {

    db.query("UPDATE booth SET owner=? WHERE id = ? AND owner is null;", [update_data.owner, update_data.id], function(err, booth) {

        if (err) {
            result(err, null);
            return;
        }
        result(update_data);
    })
}
booth.remove_owner = function(id ,result) {

    db.query("UPDATE booth SET owner = NULL WHERE id = ?;",id, function(err, booth) {

        if (err) {
            result(err, null);
            return;
        }
        result(booth);
    })
}
module.exports = booth