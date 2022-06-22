const express = require("express");
const router = express.Router()

const Account = require("../controllers/Account");
const Business = require("../controllers/Business");

router.post("/login", Account.Login)
router.post("/check", Account.Check)
router.post("/register", Business.AddBusiness)
module.exports = router 
