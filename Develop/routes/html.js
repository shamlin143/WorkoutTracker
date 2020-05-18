const router = require("express").Router();
var path = require("path");

// Routes
// =============================================================
// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads index.html
//app.get("/", function(req, res) {
//res.sendFile(path.join(__dirname, "../public/index.html"));
//});
//routes for exercise.html
router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  console.log(res);
});
//routes for stats.html
router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;