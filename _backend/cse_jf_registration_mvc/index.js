// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
//db
const db = require('./models/connect')
// body-parser 
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// Access control
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Origin,Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE')
    next();
})
// Middleware
const _AuthMiddleWare = require("./controllers/_AuthMiddleWare_controller")
    // Các routers
const homeRoutes = require("./routes/home_routes");
const userRoutes = require("./routes/Business_routes");
const registerRoutes = require("./routes/Registration_routes");
const boothRoute = require("./routes/booth_routes");
const approveRoute = require("./routes/Approve_routes");
const adminRoute = require("./routes/admin_routes");
const acountRoutes = require("./routes/Account_routes");
app.use("/", homeRoutes);
app.use("/account", acountRoutes);

//app.use(_AuthMiddleWare.isAuth);
app.use("/business", userRoutes);
app.use("/register", registerRoutes);
app.use("/booth", boothRoute);
app.use("/approve", approveRoute);
app.use("/admin", adminRoute);



setInterval(function () {
    db.query('SELECT 1');
}, 5000);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});