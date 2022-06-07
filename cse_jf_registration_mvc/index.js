// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// body-parser 
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Các routers
const homeRoutes = require("./routes/home_routes");
const userRoutes = require("./routes/User_routes");

app.use("/business", userRoutes);
app.use("/", homeRoutes);

const registerRoutes = require("./routes/Registration_routes");
app.use("/register", registerRoutes);

const boothRoute = require("./routes/booth_routes");
app.use("/booth", boothRoute);

const approveRoute = require("./routes/Approve_routes");
app.use("/approve", approveRoute);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});