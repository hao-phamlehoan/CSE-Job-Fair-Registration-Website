const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: '123456789',
    database: 'cse job fair registration'
});

let BOOTH_DATA = "SELECT * FROM `cse job fair registration`.booth;"
let REGISTRATION_DATA = "SELECT * FROM `cse job fair registration`.registation;"
let BUSSINESS_DATA = "SELECT * FROM `cse job fair registration`.bussiness;"
let APPROVE_DATA = "SELECT * FROM `cse job fair registration`.approve;"
module.exports = {BOOTH_DATA , REGISTRATION_DATA , BUSSINESS_DATA , APPROVE_DATA};