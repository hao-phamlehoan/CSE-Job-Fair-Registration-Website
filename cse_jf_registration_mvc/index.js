// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// body-parser 
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// Middleware
const _AuthMiddleWare = require("./_AuthMiddleWare")
// Các routers
const homeRoutes = require("./routes/home_routes");
const userRoutes = require("./routes/User_routes");

const acountRoutes = require("./routes/Account_routes");
app.use("/", homeRoutes);
app.use("/account", acountRoutes);
//app.use(_AuthMiddleWare.isAuth);


app.use("/business", userRoutes);


const registerRoutes = require("./routes/Registration_routes");
app.use("/register", registerRoutes);

const boothRoute = require("./routes/booth_routes");
app.use("/booth", boothRoute);

const approveRoute = require("./routes/Approve_routes");
app.use("/approve", approveRoute);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});