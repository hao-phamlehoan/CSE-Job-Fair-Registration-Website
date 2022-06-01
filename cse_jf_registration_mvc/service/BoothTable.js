const { BOOTH_DATA } = require("../models/Database")

// Returns Booth With Id
const QueryBoothById = (id) => {
  let Booth;
  BOOTH_DATA.forEach((BoothData) => {
    if (BoothData.id === Number(id)) {
      Booth = BoothData;
    }
  });
  return Booth;
};

// Returns List of Booths
const QueryListOfBooth = () => {
  return  BOOTH_DATA;
};

const DeleteBoothById = (id) => {
  BOOTH_DATA.filter((Booth) => {
    return Booth.id !== Number(id);
  });
};

module.exports = {
  QueryBoothById,
  QueryListOfBooth,
  DeleteBoothById,
};
