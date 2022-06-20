const express = require("express");
const router = express.Router();

const register = require("../controllers/Registration");
router.get("/all", register.GetAllRegister);
router.delete("/delete/:id", register.deleteRegister);
router.get("/byId/:id", register.getRegister);
router.get("/byIdbooth/:id", register.getRegister_booth);
router.get("/byIdbusiness/:id", register.getRegister_business);
router.post("/add", register.addRegister);
module.exports = router;