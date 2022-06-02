const express = require("express");
const router = express.Router()


const Bussiness = require("../controllers/Bussiness");

router.get('/', function(req, res){
    res.send("Bussiness")
});
router.get("/all", Bussiness.GetAllBussiness);
// router.get("/byId/:id", Bussiness.GetBussiness);
// router.delete("/:id", Bussiness.DeleteBussiness);

module.exports = router
