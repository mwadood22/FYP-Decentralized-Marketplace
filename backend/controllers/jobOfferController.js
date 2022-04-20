const { Profiler } = require("react");
const fs = require("fs");
var path = require("path");

var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://Arooj:aroojfyp@markazcluster.qnkzs.mongodb.net/Markaz?retryWrites=true&w=majority";
var ObjectId = require("mongodb").ObjectId;

var dbo = null;

var offersData = {
  offers: [],
};

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  // console.log("CONNECTION IS MADE!!!!!!!!!!!!!!!!!!!!!");
  dbo = db.db("Markaz");
});

exports.create = (req, res) => {
  var title = req.body.title;
  var budget = req.body.budget;
  var city = req.body.city;
  var description = req.body.description;
  var clientId = req.body.clientId;
  var address = req.body.address;
  var clientName = req.body.clientName;

  dbo.collection("JobOffers").insertOne({
    title,
    budget,
    city,
    description,
    clientId,
    address,
    clientName,
  });

  return;
};

const writeEvent = async (res) => {
  try {
    dbo
      .collection("JobOffers")
      .find()
      .toArray(function (err, offers) {
        offersData.offers = offers;
        return res.write(`data: ${JSON.stringify(offersData)}\n\n`);
        // res.end();
      });
  } catch (err) {
    const errData = {
      offers: [],
    };
    return res.write(`data: ${JSON.stringify(errData)}\n\n`);
  }
  // res.write(`id: ${sseId}\n`);
};

const sendEvent = (_req, res) => {
  // console.log(_req.params.id);
  res.writeHead(200, {
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
  });

  var collection = null;
  try {
    collection = dbo.collection("JobOffers");
  } catch (err) {
    return writeEvent(res);
  }
  const changeStream = collection.watch();
  changeStream.on("change", (next) => {
    writeEvent(res);
  });
  const sseId = new Date().toDateString();

  return writeEvent(res);
};

exports.getAllOffers = async (req, res) => {
  if (req.headers.accept === "text/event-stream") {
    sendEvent(req, res);
  } else {
    res.json({ message: "Ok" });
  }
};
