var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://Arooj:aroojfyp@markazcluster.qnkzs.mongodb.net/Markaz?retryWrites=true&w=majority";
var ObjectId = require("mongodb").ObjectId;

var dbo = null;

// const dbo = require("./connections");

var gigsData = {
  gigs: [],
};

const writeEvent = async (res) => {
  try {
    dbo
      .collection("Gigs")
      .find()
      .toArray(function (err, gigs) {
        // if (err) {
        //   return res.status(400).json({ msg: "Error" });
        // }
        //   console.log(gigs);

        // res.setHeader("content-type", "text/event-stream");

        // console.log("Loop");
        // return res.json({ gigs });
        gigsData.gigs = gigs;
        return res.write(`data: ${JSON.stringify(gigsData)}\n\n`);
        // res.end();
      });
  } catch (err) {
    const errData = {
      gigs: [],
    };
    return res.write(`data: ${JSON.stringify(errData)}\n\n`);
  }
  // res.write(`id: ${sseId}\n`);
};

const sendEvent = (_req, res) => {
  res.writeHead(200, {
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
  });

  var collection = null;
  try {
    collection = dbo.collection("Gigs");
  } catch (err) {
    return writeEvent(res);
  }
  const changeStream = collection.watch();
  changeStream.on("change", (next) => {
    writeEvent(res);
    // if (req.headers.accept === "text/event-stream") {
    //   console.log("Gigs have changed");
    //   // if (req.headers.accept === "text/event-stream") {
    //   return sendEvent(req, res);
    // } else {
    //   return res.json("ok");
    // }
    // }
  });
  // res.writeHead(200, {
  //   "Cache-Control": "no-cache",
  //   Connection: "keep-alive",
  //   "Content-Type": "text/event-stream",
  // });

  const sseId = new Date().toDateString();

  return writeEvent(res);
  res.end();
};

// async function connection() {
//   const client = new MongoClient(url);
//   dbo = await client.connect();
// }

// connection();

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  // console.log("CONNECTION IS MADE!!!!!!!!!!!!!!!!!!!!!");
  dbo = db.db("Markaz");
});

exports.check = async (req, res) => {
  if (req.headers.accept === "text/event-stream") {
    sendEvent(req, res);
  } else {
    res.json({ message: "Ok" });
  }
};
// console.log("Hello");
exports.index = async (req, res) => {
  //   console.log("All gigs list");
  dbo
    .collection("Gigs")
    .find()
    .toArray(function (err, gigs) {
      if (err) {
        return res.status(400).json({ msg: "Error" });
      }
      //   console.log(gigs);
      // res.setHeader("content-type", "text/event-stream");
      // console.log("Loop");
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
  const gig = req.body;
  //   console.log(gig);
  dbo.collection("Gigs").insert(gig);
  res.end();
  return;
  // return res.json({ gig });
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
