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

// exports.GetBussiness = (req, res) => {
//   const BussinessId = req.params.id; 
//   const Bussiness = QueryBussinessById(BussinessId);

//   // DO SOMETHING WITH THE Bussiness OR JUST RETURN IT
//   return res.json(Bussiness);
// };

// exports.DeleteBussiness = (req, res) => {
//   const BussinessId = req.params.id;
//   const Bussiness = DeleteBussinessById(BussinessId);

//   // DO SOMETHING WITH THE Bussiness OR JUST RETURN IT
//   return res.json(Bussiness);
// };