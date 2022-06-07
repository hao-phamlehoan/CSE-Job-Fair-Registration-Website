const express = require("express");
const router = express.Router()
const homeController = require("../controllers/homeController");


router.get("/", function (req, res) {
    res.send("Home")
  }) 
router.get("/token",function (req, res){
var user = {
    name:"Admin",
    email:"admin@example.com"
}
// const _token = 
})

module.exports = router