// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// body-parser 
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

// Các routers
const homeRoutes = require("./routes/home_routes");
const userRoutes = require("./routes/User_routes");
// const registrationRoutes = require("./routes/Registration");
// const approveRoutes = require("./routes/Approve");
app.use("/business", userRoutes);
app.use("/", homeRoutes);
// app.use("/registration", registrationRoutes);
// app.use("/approve?", approveRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
