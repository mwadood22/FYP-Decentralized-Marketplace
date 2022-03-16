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
    .collection("gigs")
    .find()
    .toArray(function (err, gigs) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json({ gigs });
    });
};

exports.create = (req, res) => {
  //   console.log("All gigs list");
  const gig = req.body;
  //   console.log(gig);
  dbo.collection("gigs").insert(gig);
  return res.json({ gig });
};

exports.delete = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo.collection("gigs").remove({ _id: ObjectId(id) });
  return res.json({ msg: "deleted" });
};

exports.show = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo.collection("gigs").findOne({ _id: ObjectId(id) }, function (err, gigs) {
    if (err) {
      return res.status(400).json({ msg: "Error" });
    }
    //   console.log(gigs);
    return res.json(gigs);
  });
  //   return res.json({ gigs });
};
