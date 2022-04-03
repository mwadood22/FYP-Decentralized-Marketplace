var express = require("express");
var router = express.Router();

const gigController = require("../controllers/gigController");
const workerController = require("../controllers/workerController");
const jobController = require("../controllers/jobController");

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

module.exports = router;
