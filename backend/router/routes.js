var express = require("express");
var router = express.Router();

const gigController = require("../controllers/gigController");

// Gig Routes
router.get("/gig/", gigController.index);
router.post("/gig/create", gigController.create);
// router.patch("/gig/", gigController.edit);
router.delete("/gig/:id", gigController.delete);
router.get("/gig/:id", gigController.show);

module.exports = router;
