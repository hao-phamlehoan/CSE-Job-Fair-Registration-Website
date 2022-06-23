const express = require("express");
const router = express.Router();

const admin = require("../controllers/Admin.js");
router.get("/all", admin.GetAllAdmin);
router.post("/add", admin.AddAdmin);
router.get("/byId/:id", admin.GetAdmin);
router.delete("/delete/:id", admin.DelAdmin);
router.put("/update", admin.UpdateAdmin);

module.exports = router;