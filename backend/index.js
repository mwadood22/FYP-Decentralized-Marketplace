const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const port = 6942;
const router = require("./router/routes");
//const path = require("path");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(express.static(__dirname + "./public/"));
app.use(function timeLog(req, res, next) {
  console.log(req.url, " received with following details");
  console.log("method: ", req.method);
  console.log("host: ", req.hostname);
  console.log("timestamp: ", Date.now());
  next();
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
