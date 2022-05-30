const { APPROVE_DATA } = require("../models/Database")

// Returns Approve With Id
const QueryApproveById = (id) => {
  let Approve;
  APPROVE_DATA.forEach((ApproveData) => {
    if (ApproveData.id === Number(id)) {
      Approve = ApproveData;
    }
  });
  return Approve;
};

// Returns List of Approves
const QueryListOfApproves = () => {
  return  APPROVE_DATA;
};

const DeleteApproveById = (id) => {
    APPROVE_DATA.filter((Approve) => {
    return Approve.id !== Number(id);
  });
};

module.exports = {
  QueryApproveById,
  QueryListOfApproves,
  DeleteApproveById,
};
