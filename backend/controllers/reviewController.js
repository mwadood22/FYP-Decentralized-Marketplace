const { Profiler } = require("react");
const fs = require("fs");
var path = require("path");

var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://Arooj:aroojfyp@markazcluster.qnkzs.mongodb.net/Markaz?retryWrites=true&w=majority";
var ObjectId = require("mongodb").ObjectId;

var dbo = null;

// var reviewsData = {
//   reviews: [],
// };

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  // console.log("CONNECTION IS MADE!!!!!!!!!!!!!!!!!!!!!");
  dbo = db.db("Markaz");
});

exports.create = async (req, res) => {
  var description = req.body.description;
  //   var clientId = req.body.clientId;

  const data = await dbo.collection("Reviews").insertOne({
    description,
  });
  const id = res.json({ data });
  console.log(id);
  return;
};
