const express = require("express");
const router = express.Router();
const app = express();
router.get("/", (req, res) => {
  res.render("form");
});

router.post("/display-form-details", (req, res) => {
  app.locals.data = req.body;
  res.redirect("/display-form-details");
});
router.get("/display-form-details", (req, res) => {
  const data = app.locals.data;
  app.locals.data = null;
  res.render("showFormData", data);
});
module.exports = router;
