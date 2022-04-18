var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://Arooj:aroojfyp@markazcluster.qnkzs.mongodb.net/Markaz?retryWrites=true&w=majority";
var ObjectId = require("mongodb").ObjectId;

var dbo = null;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  dbo = db.db("Markaz");
});

exports.index = async (req, res) => {
  //   console.log("All gigs list");
  dbo
    .collection("WorkerData")
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
  dbo.collection("WorkerData").insert(worker);
  return res.json({ worker });
};

exports.delete = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo.collection("WorkerData").remove({ _id: ObjectId(id) });
  return res.json({ msg: "deleted" });
};

exports.show = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo
    .collection("WorkerData")
    .findOne({ _id: ObjectId(id) }, function (err, workers) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json(workers);
    });
  //   return res.json({ gigs });
};

exports.showAgainstUserId = (req, res) => {
  //   console.log("All gigs list");
  // const user_id = req.params.userId;
  // console.log(id);
  dbo
    .collection("WorkerData")
    .findOne({ user_id: req.params.user_id }, function (err, workers) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json(workers);
    });
  //   return res.json({ gigs });
};

exports.showAgainstGig = (req, res) => {
  //   console.log("All gigs list");
  const id = req.params.workerId;
  console.log(id);
  dbo
    .collection("WorkerData")
    .findOne({ user_id: req.params.workerId }, function (err, workers) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json(workers);
    });
  //   return res.json({ gigs });
};
