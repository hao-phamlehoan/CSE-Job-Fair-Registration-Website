const express = require("express");
const router = express.Router();

const booth = require("../controllers/Booth.js");

router.get("/all", booth.GetAllBooth);
router.get("/byId/:id", booth.GetBooth);
router.get("/byIdbusiness/:id", booth.GetBooth_business);
router.post("/add", booth.AddBooth);
router.delete("/del/:id", booth.DelBooth);
router.put("/update", booth.UpdateBooth);
router.get("/remove_owner/:id", booth.RemoveOwnerBooth);
module.exports = router;