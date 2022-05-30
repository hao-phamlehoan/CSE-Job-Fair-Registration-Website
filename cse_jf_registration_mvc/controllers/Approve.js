const {
    QueryListOfApprove,
    QueryApproveById,
    DeleteApproveById,
  } = require("../service/ApproveTable");
  
  const GetAllApproves = (req, res) => {
    const ApproveList = QueryListOfApprove();
  
    // DO SOMETHING WITH THE Approve LIST OR JUST RETURN IT
    return res.json(ApproveList);
  };
  
  const GetApprove = (req, res) => {
    const ApproveId = req.params.id;
    const Approve = QueryApproveById(ApproveId);
  
    // DO SOMETHING WITH THE Approve OR JUST RETURN IT
    return res.json(Approve);
  };
  
  const DeleteApprove = (req, res) => {
    const ApproveId = req.params.id;
    const Approve = DeleteApproveById(ApproveId);
  
    // DO SOMETHING WITH THE Approve OR JUST RETURN IT
    return res.json(Approve);
  };
  
  module.exports = {
    GetAllApproves,
    GetApprove,
    DeleteApprove,
  };
  