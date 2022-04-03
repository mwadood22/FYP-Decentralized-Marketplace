var express = require("express");
var router = express.Router();

const gigController = require("../controllers/gigController");
const workerController = require("../controllers/workerController");
const jobController = require("../controllers/jobController");
const testimonialController = require("../controllers/testimonialController");
const categoryController = require("../controllers/categoryController");

// Gig Routes
router.get("/gig/", gigController.index);
router.post("/gig/create", gigController.create);
router.patch("/gig/", gigController.edit);
router.delete("/gig/:id", gigController.delete);
router.get("/gig/:id", gigController.show);

router.get("/worker/", workerController.index);
router.post("/worker/create", workerController.create);
// router.patch("/gig/", gigController.edit);
router.delete("/worker/:id", workerController.delete);
router.get("/worker/:id", workerController.show);

router.get("/job/", jobController.index);
router.post("/job/create", jobController.create);
// router.patch("/gig/", gigController.edit);
router.delete("/job/:id", jobController.delete);
router.get("/job/:id", jobController.show);

router.get("/testimonial/", testimonialController.index);
router.post("/testimonial/create", testimonialController.create);
// router.patch("/gig/", gigController.edit);
router.delete("/testimonial/:id", testimonialController.delete);
router.get("/testimonial/:id", testimonialController.show);

router.get("/category/", categoryController.index);
router.post("/category/create", categoryController.create);
// router.patch("/gig/", gigController.edit);
router.delete("/category/:id", categoryController.delete);
router.get("/categeory/:id", categoryController.show);

module.exports = router;
