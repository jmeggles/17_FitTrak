// Create all the routes to display pages (View)
// You will need html routes to display the following pages:
const path = require("path");
const db = require("../models");

module.exports = function(app) {
// index.html ( "/" )
  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// exercise.html ( "/exercise" )
  app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
// stats.html ( "/stats" )
  app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};