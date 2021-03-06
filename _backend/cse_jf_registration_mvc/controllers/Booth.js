const Booth = require("../models/booth");
exports.GetAllBooth = function(req, res) {
    Booth.get_all(function(data) {
        res.send({ result: data });
    })

};

exports.GetBooth = function(req, res) {
    Booth.getById(req.params.id, function(data) {
        res.send({ result: data });
    })
};
exports.GetBooth_business = function(req, res) {
    Booth.getById_business(req.params.id, function(data) {
        res.send({ result: data });
    })
};
exports.AddBooth = function(req, res) {
    var newdata = req.body;
    Booth.add(newdata, function(response) {
        res.send({ result: response });
    })
}
exports.DelBooth = function(req, res) {
    var id = req.params.id;
    Booth.remove(id, function(response) {
        res.send({ result: response });
    })
}
exports.UpdateBooth = function(req, res) {
    var data_update = req.body;
    Booth.update(data_update, function(response) {
        res.send({ result: response });
    })
}
exports.OwnerBooth = function(req, res) {
    var data_update = req.body;
    Booth.owner(data_update, function(response) {
        res.send({ result: response });
    })
}

exports.RemoveOwnerBooth = function(req, res) {
    Booth.remove_owner(req.params.id, function(response) {
        res.send({ result: response });
    })
}