const express = require("express");
const router = express.Router();
const { GetAllApprove, GetApprove, DeleteApprove } = require("../controllers/Approve");

router.get("/all", GetAllApprove);
router.get("/byId/:id", GetApprove);
router.delete("/:id", DeleteApprove);

module.exports = router;
