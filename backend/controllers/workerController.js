var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require("mongodb").ObjectId;

var dbo = null;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  dbo = db.db("Markaz");
});

exports.index = async (req, res) => {
  //   console.log("All gigs list");
  dbo
    .collection("workerData")
    .find()
    .toArray(function (err, workers) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json({ workers });
    });
};

exports.create = (req, res) => {
  //   console.log("All gigs list");
  const worker = req.body;
  //   console.log(gig);
  dbo.collection("workerData").insert(worker);
  return res.json({ worker });
};

exports.delete = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo.collection("workerData").remove({ _id: ObjectId(id) });
  return res.json({ msg: "deleted" });
};

exports.show = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo
    .collection("workerData")
    .findOne({ _id: ObjectId(id) }, function (err, workers) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json(workers);
    });
  //   return res.json({ gigs });
};
