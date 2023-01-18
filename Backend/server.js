const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.REACT_APP_BACKEND_PORT || 5000;
app.use(cors());
app.use(express.json());

//routes
app.use("/bank" , require("./routes/bank/record"));
app.use("/bank_branch" , require("./routes//bank_branch/record"));
app.use("/employee" , require("./routes/Employee/record"));

// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log("................");
  console.log(`Server is running on port: ${port}`);
});