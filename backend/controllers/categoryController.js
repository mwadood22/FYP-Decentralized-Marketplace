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
    .collection("Categories")
    .find()
    .toArray(function (err, categories) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json({ categories });
    });
};

exports.create = (req, res) => {
  //   console.log("All gigs list");
  const category = req.body;
  //   console.log(gig);
  dbo.collection("Categories").insert(category);
  return res.json({ category });
};

exports.delete = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo.collection("Categories").remove({ _id: ObjectId(id) });
  return res.json({ msg: "deleted" });
};

exports.show = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo
    .collection("Categories")
    .findOne({ _id: ObjectId(id) }, function (err, categories) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json(categories);
    });
  //   return res.json({ gigs });
};
