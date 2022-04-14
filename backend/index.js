const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const port = 6942;
const router = require("./router/routes");
//const path = require("path");

app.use(bodyParser.json());
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
