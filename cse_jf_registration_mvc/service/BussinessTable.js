const { BUSSINESS_DATA } = require("../models/Database")

// Returns Bussiness With Id
const QueryBussinessById = (id) => {
  let Bussiness;
  BUSSINESS_DATA.forEach((BussinessData) => {
    if (BussinessData.id === Number(id)) {
      Bussiness = BussinessData;
    }
  });
  return Bussiness;
};

// Returns List of Bussinesss
const QueryListOfBussinesss = () => {
  return  BUSSINESS_DATA;
};

const DeleteBussinessById = (id) => {
    BUSSINESS_DATA.filter((Bussiness) => {
    return Bussiness.id !== Number(id);
  });
};

module.exports = {
  QueryBussinessById,
  QueryListOfBussinesss,
  DeleteBussinessById,
};
