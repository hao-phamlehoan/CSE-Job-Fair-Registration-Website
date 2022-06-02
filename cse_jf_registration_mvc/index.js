// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", function (req, res) {
  res.send("Home")
})

const userRoutes = require("./routes/User_routes");
// const registrationRoutes = require("./routes/Registration");
// const approveRoutes = require("./routes/Approve");
app.use("/bussiness", userRoutes);

// app.use("/registration", registrationRoutes);
// app.use("/approve?", approveRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
