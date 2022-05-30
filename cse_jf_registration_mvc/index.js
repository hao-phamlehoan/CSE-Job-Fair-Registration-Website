// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require("./routes/user");
const registrationRoutes = require("./routes/Registration");
const approveRoutes = require("./routes/Approve");
app.use("/user", userRoutes);
app.use("/user", registrationRoutes);
app.use("/user", approveRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
