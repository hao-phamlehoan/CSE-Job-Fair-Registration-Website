const Account = require("../models/account");
var JWT = require("../_JWT")

exports.Login = async function(req, res) {
    var data = req.body;
    Account.check_login(data ,async function(response){
      if(response){
        const _token = await JWT.make(response)
        res.send({result: _token , status: true, isAdmin: response.isAdmin});
        return; 
      }
      res.send({result: "Email hoặc Password sai !!!", status: false, isAdmin: false});
    })
  }
exports.Check = async function(req, res){
    var token = req.body.token;
    try {
      const data = await JWT.check(token)
      res.send({data: data})
     }catch{
         res.send({data: "Mã token không hợp lệ"})
     }
}