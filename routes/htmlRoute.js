const path = require("path");
const db = require("../Models");

module.exports = function(app) {
// html routes to display the following pages:
    // index.html ( "/" )  (home page)
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