const express = require("express");
const router = express.Router()


const Business = require("../controllers/Business");

router.get('/', function(req, res){
    res.send("Business")
});
router.get("/all", Business.GetAllBusiness);
 router.get("/byId/:id", Business.GetBusiness);
 router.put("/add", Business.AddBusiness);
//router.delete("/:id", Business.DeleteBusiness);

module.exports = router
