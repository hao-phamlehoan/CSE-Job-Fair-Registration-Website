const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: '123456789',
    database: 'cse job fair registration'
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/get',(req, res) =>{
    const sqlSelect = "SELECT * FROM `cse job fair registration`.booth;"
    db.query(sqlSelect,(err, result) => {
        res.send(result)
    })
})

app.post('/api/insert', (req, res) => {

    const idbooth = req.body.idbooth;
    const location = req.body.location;
    const size = req.body.size;
    const price = req.body.price;

    const sqlInsert = "INSERT INTO `booth` (`idbooth`, `location`, `size`, `price`) VALUES (?,?,?,?);"

    db.query(sqlInsert,[idbooth,location,size,price],(err, result) => {
        console.log(result)
    })
})

app.get('/', (req, res) => {
        res.send("Hello, world!")
})

app.listen(3001,()=> {
    console.log('sever running on port 3001')
})