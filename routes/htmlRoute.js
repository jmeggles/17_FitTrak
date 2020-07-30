const path = require("path");
const db = require("../Models");

const router = require('express').Router();
// html routes to display the following pages:
// index.html ( "/" )  (home page)
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise.html ( "/exercise" )
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// stats.html ( "/stats" )
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;