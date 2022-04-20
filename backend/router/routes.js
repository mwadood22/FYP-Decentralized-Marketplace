var express = require("express");
var router = express.Router();
const multer = require("multer");

const gigController = require("../controllers/gigController");
const workerController = require("../controllers/workerController");
const jobController = require("../controllers/jobController");
const testimonialController = require("../controllers/testimonialController");
const categoryController = require("../controllers/categoryController");
const bidsController = require("../controllers/bidsController");
const jobOfferController = require("../controllers/jobOfferController");
const projectController = require("../controllers/projectController");
//const { check } = require("express-validator");
//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

// Gig Routes
router.get("/gig/", upload.single("picture"), gigController.index);
router.post("/gig/create", upload.single("picture"), gigController.create);
router.patch("/gig/", gigController.edit);
router.delete("/gig/:id", gigController.delete);
router.get("/gig/:id", gigController.show);
router.get("/gig/category-wise/:category", gigController.filteredgigs);
router.get("/check", gigController.check);
// router.get("/gig/worker/:workerId", gigController.gigAgainstWorkerId);   (App was crashing bcz of it so commented it)

//worker routes
router.get("/worker/", workerController.index);
router.post(
  "/worker/create",
  upload.single("picture"),
  workerController.create
);
// router.patch("/gig/", gigController.edit);
router.delete("/worker/:id", workerController.delete);
router.get("/worker/:id", upload.single("picture"), workerController.show);
router.get("/worker/gig/:workerId", workerController.showAgainstGig);
router.get("/worker/moralis/:user_id", workerController.showAgainstUserId); //getting worker against moralis user_id

//job routes
router.get("/job/", jobController.index);
router.post("/job/create", jobController.create);
router.patch("/job/", jobController.edit);
router.delete("/job/:id", jobController.delete);
// router.get("/job/:id", jobController.show);
router.get("/jobs/check/:id", jobController.check);
// router.get("/job/:id", jobController.show);
router.get("/job/:key", jobController.search);
router.get("/jobs/getAll", jobController.getAllJobs);
router.delete("/job/:id", jobController.delete);

//testimonial routes
router.get("/testimonial/", testimonialController.index);
router.post("/testimonial/create", testimonialController.create);
// router.patch("/gig/", gigController.edit);
router.delete("/testimonial/:id", testimonialController.delete);
router.get("/testimonial/:id", testimonialController.show);

//categories routes
router.get("/category/", categoryController.index);
router.post("/category/create", categoryController.create);
// router.patch("/gig/", gigController.edit);
router.delete("/category/:id", categoryController.delete);
router.get("/categeory/:id", categoryController.show);

// bids routes
router.post("/bids/create", bidsController.create);
router.get("/bids/:job_id", bidsController.show);
router.get("/bids/id/:id", bidsController.getBid);

// project routes
router.post("/projects/create", projectController.create);
router.get("/projects/:worker_id", projectController.show);

//JobOffers routes

router.post("/offer/create", jobOfferController.create);
router.get("/offers/getAll", jobOfferController.getAllOffers);

//current project routes
router.post("/projects/create", projectController.create);

module.exports = router;
