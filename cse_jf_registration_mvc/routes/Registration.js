const express = require("express");
const router = express.Router();
const { GetAllRegistration, GetRegistration, DeleteRegistration } = require("../controllers/Registration");

router.get("/all", GetAllRegistration);
router.get("/byId/:id", GetRegistration);
router.delete("/:id", DeleteRegistration);

module.exports = router;
