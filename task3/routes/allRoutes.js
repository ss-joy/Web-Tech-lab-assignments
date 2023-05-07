const express = require("express");
const path = require("path");
const router = express.Router();
router.get("/about", (req, res) => {
  const p = path.join(__dirname, "..", "views", "about.html");
  res.sendFile(path.join(__dirname, "..", "views", "about.html"));
});
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/students", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "students.html"));
});

router.get("/time", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "time.html"));
});

module.exports = router;
