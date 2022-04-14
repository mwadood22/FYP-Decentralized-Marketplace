const { Profiler } = require("react");
const fs = require("fs");
var path = require("path");

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
  //let profile = req.file.path;

  dbo
    .collection("Gigs")
    .find()
    .toArray(function (err, gigs) {
      //gigs.myFile = profile ? profile : gigs.myFile;
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      return res.json({ gigs });
    });
};

exports.filteredgigs = async (req, res) => {
  //   console.log("All gigs list");
  // console.log(req.params);
  dbo
    .collection("Gigs")
    .find({
      $or: [{ category: { $regex: req.params.category } }],
    })
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

  //let profile = req.file ? req.file.filename : null;
  //getBase64(profile).then((data) => console.log(data));
  //profile = base64_encode(profile);
  var profile = fs.readFileSync(req.file.path);
  var encImg = profile.toString("base64");
  var picture = new Buffer(encImg, "base64");

  var gigTitle = req.body.gigTitle;
  var budget = req.body.budget;
  var category = req.body.category;
  var gigdescription = req.body.gigdescription;

  //const gig = req.body;
  //let{gigTitle,budget,category,gigDescription,profile}=req.body;

  //   console.log(gig);
  dbo
    .collection("Gigs")
    .insertOne({ gigTitle, budget, category, gigdescription, picture });
  // if (err) {
  //   return res.status(400).json({ msg: "Error" });
  // }
  //return res.json({ gig });
  return;
};

exports.delete = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo.collection("Gigs").remove({ _id: ObjectId(id) });
  return res.json({ msg: "deleted" });
};

exports.show = (req, res) => {
  //   console.log("All gigs list");
  const { id } = req.params;
  console.log(id);
  dbo.collection("Gigs").findOne({ _id: ObjectId(id) }, function (err, gigs) {
    if (err) {
      return res.status(400).json({ msg: "Error" });
    }
    console.log(gigs);
    return res.json(gigs);
  });
  //   return res.json({ gigs });
};

exports.edit = async (req, res) => {
  // const gig = req.body;
  const gig = req.body;
  console.log(gig);
  await dbo
    .collection("Gigs")
    .findOne({ _id: ObjectId(gig._id) }, function (err, gigs) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      // console.log(gigs);
      // return res.json(gigs);
      dbo.collection("Gigs").update(
        { _id: ObjectId(gig._id) },
        {
          $set: {
            title: gig.title,
            budget: gig.budget,
            category: gig.category,
            gigdescription: gig.gigdescription,
          },
        }
      );
    });
};
