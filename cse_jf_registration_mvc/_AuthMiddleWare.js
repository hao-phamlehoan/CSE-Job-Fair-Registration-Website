let isAuth = async function(req, res , next){
    var _JWT = require("./_JWT")
    var _token = req.headers.authorization
    if(_token){
        try{
            var authData = await _JWT.check(_token)
            req.auth = authData;
            next()
        }catch(err){
            res.send({data: "Mã token không hợp lệ"})
        }
    }else {
        res.send({data: "Bạn chưa có mã token"})
    }
    console.log(req.headers)
}
module.exports = {
    isAuth
}