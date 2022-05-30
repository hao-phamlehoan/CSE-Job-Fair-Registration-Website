const { REGISTRATION_DATA } = require("../models/Database")

// Returns Registration With Id
const QueryRegistrationById = (id) => {
  let Registration;
  REGISTRATION_DATA.forEach((RegistrationData) => {
    if (RegistrationData.id === Number(id)) {
      Registration = RegistrationData;
    }
  });
  return Registration;
};

// Returns List of Registrations
const QueryListOfRegistration = () => {
  return  REGISTRATION_DATA;
};

const DeleteRegistrationById = (id) => {
    REGISTRATION_DATA.filter((Registration) => {
    return Registration.id !== Number(id);
  });
};

module.exports = {
  QueryRegistrationById,
  QueryListOfRegistration,
  DeleteRegistrationById,
};
