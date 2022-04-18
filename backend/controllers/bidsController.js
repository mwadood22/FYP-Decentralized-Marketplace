var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://Arooj:aroojfyp@markazcluster.qnkzs.mongodb.net/Markaz?retryWrites=true&w=majority";
var ObjectId = require("mongodb").ObjectId;

var dbo = null;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  // console.log("CONNECTION IS MADE!!!!!!!!!!!!!!!!!!!!!");
  dbo = db.db("Markaz");
});

exports.create = (req, res) => {
  //   console.log("All gigs list");
  const bid = req.body;

  console.log(bid);
  dbo.collection("Bids").insert(bid);
  //   res.end();
  //   return;
  return res.json({ bid });
};

exports.show = (req, res) => {
  //   console.log("All gigs list");

  dbo
    .collection("Bids")
    .find({
      $or: [{ job_id: { $regex: req.params.job_id } }],
    })
    .toArray(function (err, bids) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);

      return res.json({ bids });
    });
  //   return res.json({ gigs });
};
