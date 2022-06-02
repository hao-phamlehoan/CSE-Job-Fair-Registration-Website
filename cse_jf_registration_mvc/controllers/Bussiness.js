// const {
//   QueryListOfBussiness,
//   QueryBussinessById,
//   DeleteBussinessById,
// } = require("../service/BussinessTable");
const Bussiness = require("../models/Bussiness_data");
exports.GetAllBussiness = function (req, res ) { 
  Bussiness.get_all(function (data){
      res.send({result: data});
  })

};

exports.GetBussiness = function(req, res) {
   Bussiness.getById(req.params.id, function(data){
     res.send({result: data});
   })
};

exports.AddBussiness = function(req, res) {
  var newdata = req.body;
  Bussiness.add(newdata , function(data){
    res.send({result: data});
  })
}
// exports.DeleteBussiness = (req, res) => {
//   const BussinessId = req.params.id;
//   const Bussiness = DeleteBussinessById(BussinessId);

//   // DO SOMETHING WITH THE Bussiness OR JUST RETURN IT
//   return res.json(Bussiness);
// };