const {
  QueryListOfBussiness,
  QueryBussinessById,
  DeleteBussinessById,
} = require("../service/BussinessTable");

const GetAllBussiness = (req, res) => {
  const BussinessList = QueryListOfBussiness();

  // DO SOMETHING WITH THE Bussiness LIST OR JUST RETURN IT
  return res.json(BussinessList);
};

const GetBussiness = (req, res) => {
  const BussinessId = req.params.id;
  const Bussiness = QueryBussinessById(BussinessId);

  // DO SOMETHING WITH THE Bussiness OR JUST RETURN IT
  return res.json(Bussiness);
};

const DeleteBussiness = (req, res) => {
  const BussinessId = req.params.id;
  const Bussiness = DeleteBussinessById(BussinessId);

  // DO SOMETHING WITH THE Bussiness OR JUST RETURN IT
  return res.json(Bussiness);
};

module.exports = {
  GetAllBussiness,
  GetBussiness,
  DeleteBussiness,
};
