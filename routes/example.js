const express = require("express");

const router = express.Router();

router.get("/example", (req, res, next) => {
  res.send("Just an example");
});

module.exports = router;
