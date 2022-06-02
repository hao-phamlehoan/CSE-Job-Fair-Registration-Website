// const {
//   QueryListOfBusiness,
//   QueryBusinessById,
//   DeleteBusinessById,
// } = require("../service/BusinessTable");
const Business = require("../models/Business_data");
exports.GetAllBusiness = function (req, res ) { 
  Business.get_all(function (data){
      res.send({result: data});
  })

};

exports.GetBusiness = function(req, res) {
   Business.getById(req.params.id, function(data){
     res.send({result: data});
   })
};

exports.AddBusiness = function(req, res) {
  var newdata = req.body;
  Business.add(newdata , function(data){
    res.send({result: data});
  })
}
// exports.DeleteBusiness = (req, res) => {
//   const BusinessId = req.params.id;
//   const Business = DeleteBusinessById(BusinessId);

//   // DO SOMETHING WITH THE Business OR JUST RETURN IT
//   return res.json(Business);
// };