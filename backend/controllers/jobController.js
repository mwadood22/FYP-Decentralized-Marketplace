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
    .collection("CustomJobs")
    .find()
    .toArray(function (err, jobs) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json({ jobs });
    });
};

exports.create = (req, res) => {
  //   console.log("All gigs list");
  const job = req.body;
  //   console.log(gig);
  dbo.collection("CustomJobs").insert(job);
  return res.json({ job });
};

exports.delete = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo.collection("CustomJobs").remove({ _id: ObjectId(id) });
  return res.json({ msg: "deleted" });
};

exports.show = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo
    .collection("CustomJobs")
    .findOne({ _id: ObjectId(id) }, function (err, jobs) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json(jobs);
    });
  //   return res.json({ gigs });
};

exports.search = async (req, res) => {
  //   console.log("All gigs list");
  await dbo
    .collection("CustomJobs")
    .find({
      $or: [
        { title: { $regex: req.params.key } },
        // { address: { $regex: req.params.key } }
      ],
    })
    .toArray(function (err, jobs) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json({ jobs });
    });
  // console.log(req.params.key);

  // .toArray(function (err, jobs) {  //   if (err) {
  //     return res.status(400).json({ msg: "Error" });
  //   }
  //   //   console.log(gigs);
  //   return res.json({ jobs });
  // });
  // console.log(result);
  // res.send(result);
};
