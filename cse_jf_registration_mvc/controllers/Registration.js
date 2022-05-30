const {
    QueryListOfRegistration,
    QueryRegistrationById,
    DeleteRegistrationById,
  } = require("../service/RegistrationTable");
  
  const GetAllRegistrations = (req, res) => {
    const RegistrationList = QueryListOfRegistration();
  
    // DO SOMETHING WITH THE Registration LIST OR JUST RETURN IT
    return res.json(RegistrationList);
  };
  
  const GetRegistration = (req, res) => {
    const RegistrationId = req.params.id;
    const Registration = QueryRegistrationById(RegistrationId);
  
    // DO SOMETHING WITH THE Registration OR JUST RETURN IT
    return res.json(Registration);
  };
  
  const DeleteRegistration = (req, res) => {
    const RegistrationId = req.params.id;
    const Registration = DeleteRegistrationById(RegistrationId);
  
    // DO SOMETHING WITH THE Registration OR JUST RETURN IT
    return res.json(Registration);
  };
  
  module.exports = {
    GetAllRegistrations,
    GetRegistration,
    DeleteRegistration,
  };
  