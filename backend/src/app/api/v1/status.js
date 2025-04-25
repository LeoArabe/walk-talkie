const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("English Audio Connect API is running!");
});

module.exports = router;
