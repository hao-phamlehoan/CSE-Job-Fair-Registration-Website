const db = require('./connect')

const Account = function(business) {
    this.idbusiness = business.idbusiness
    this.name = business.name
    this.phone = business.phone
    this.email = business.email
    this.representation_name = business.representation_name
    this.password = business.password
}


Account.check_login = function ( data,result){
    db.query("SELECT * FROM admin WHERE email = ? AND password = ? ;",[data.email,data.password],  function (err, business){
        if(err || business.length == 0){
            db.query("SELECT * FROM business WHERE email = ? AND password = ? ;",[data.email,data.password],function (err,business){
                if(err || business.length == 0){
                    console.log("Một người dùng lạ đang cố gắng đăng nhập: `"+ data.email + "`   pass: `" + data.password + "`")
                    result(null)
                }
                else{
                    console.log("Doanh nghiệp "+ business[0].email + " đã đăng nhập");
                    result({ data: business[0],isAdmin: false})
                }
            });
        }else {
            console.log("Admin "+business[0].email + " đã đăng nhập");
            result({ data: business[0],isAdmin: true})
        }
    })
        
}

module.exports = Account