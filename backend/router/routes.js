//const { check } = require("express-validator");
//multervar
express = require("express");
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
const contractController = require("../controllers/contractController");
const reviewController = require("../controllers/reviewController");
const { body } = require("express-validator");

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

// Gig Routes with validations
router.get("/gig/", upload.single("picture"), gigController.index);

router.post(
  "/gig/create",
  upload.single("picture"),

  body("gigTitle").not().isEmpty().not().isInt().isLength({
    min: 20,
  }),
  // .withMessage("Title must be alphabeticwith enough length"),
  body("gigdescription").not().isEmpty().not().isInt().isLength({
    min: 30,
    max: 100,
  }),
  body("budget").not().isEmpty().isInt({ no_symbols: true }),
  body("category").not().isEmpty(),

  gigController.create
);

router.patch(
  "/gig/",
  body("gigTitle").not().isEmpty().not().isInt().isLength({
    min: 20,
  }),
  body("gigdescription").not().isEmpty().not().isInt().isLength({
    min: 30,
    max: 100,
  }),
  body("budget").not().isEmpty().isInt({ no_symbols: true }),
  body("category").not().isEmpty(),
  gigController.edit
);

router.delete("/gig/:id", gigController.delete);
router.get("/gig/:id", gigController.show);
router.get("/gig/get/:workerId", gigController.getGigs);
router.get("/gig/category-wise/:category", gigController.filteredgigs);
router.get("/check", gigController.check);
router.get("/gig/worker/:workerId", gigController.gigAgainstWorkerId); //(App was crashing bcz of it so commented it)

//worker routes with validations
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
router.patch(
  "/worker/",
  body("Name").not().isEmpty().not().isInt(),
  body("city").not().isEmpty().not().isInt(),
  body("contact").not().isEmpty().isInt({ no_symbols: true }),
  body("skills").not().isEmpty().not().isInt(),
  body("about").not().isEmpty().not().isInt().isLength({
    min: 30,
    max: 100,
  }),
  body("city").not().isEmpty().not().isInt(),
  workerController.edit
);

//job routes with validations
router.get("/job/", jobController.index);
router.post(
  "/job/create",
  upload.single("picture"),
  body("title").not().isEmpty().not().isInt().isLength({
    min: 20,
  }),
  body("description").not().isEmpty().not().isInt().isLength({
    min: 30,
    max: 100,
  }),
  body("budget").not().isEmpty().isInt({ no_symbols: true }),
  body("category").not().isEmpty(),
  body("address").not().isEmpty().not().isInt(),
  body("city").not().isEmpty().not().isInt(),
  jobController.create
);

router.patch(
  "/job/",
  body("title").not().isEmpty().not().isInt().isLength({
    min: 20,
  }),
  body("description").not().isEmpty().not().isInt().isLength({
    min: 40,
    max: 100,
  }),
  body("budget").not().isEmpty().isInt({ no_symbols: true }),
  body("category").not().isEmpty(),
  body("address").not().isEmpty().not().isInt(),
  body("city").not().isEmpty().not().isInt(),
  jobController.edit
);

router.delete("/job/:id", jobController.delete);
// router.get("/job/:id", jobController.show);
router.get("/jobs/check/:id", jobController.check);
router.get("/jobs/get/:id", jobController.get);
// router.get("/job/:id", jobController.show);
router.get("/job/:key", jobController.search);
router.get("/jobs/getAll", jobController.getAllJobs);
// router.delete("/job/:id", jobController.delete);

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
router.post(
  "/bids/create",
  body("price").not().isEmpty().isInt(),
  bidsController.create
);
router.get("/bids/:job_id", bidsController.show);
router.get("/bids/id/:id", bidsController.getBid);

// project routes
router.post("/projects/create", projectController.create);
router.get("/projects/:worker_id", projectController.show);
router.get("/projects/:projectId", projectController.showProject);
router.get("/projects/client/:client_id", projectController.showByClient);

//JobOffers routes

router.post("/offer/create", jobOfferController.create);
router.get("/offers/:workerId", jobOfferController.getAllOffers);
router.delete("/offer/:id", jobOfferController.delete);
// router.get("/offers/:workerId", jobOfferController.get);

//review routes
router.post(
  "/review/create",
  body("description").not().isEmpty().isLength({
    min: 20,
  }),
  // .withMessage("Invalid review"),
  reviewController.create
);
router.get("/review/worker/:workerId", reviewController.show);

//current project routes
router.post("/projects/create", projectController.create);

// Contract routes
router.post("/contract/create", contractController.create);
router.get("/contract/:jobOfferId", contractController.show);

module.exports = router;
