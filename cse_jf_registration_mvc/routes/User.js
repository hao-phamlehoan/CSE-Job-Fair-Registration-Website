const express = require("express");
const router = express.Router();
const { GetAllBussiness, GetBussiness, DeleteBussiness } = require("../controllers/Bussiness");

router.get("/all", GetAllBussiness);
router.get("/byId/:id", GetBussiness);
router.delete("/:id", DeleteBussiness);

module.exports = router;
