var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/json", (req, res) => {
  res.json({
    message: "My name is maulana",
    identity: { name: "Maulana", age: 21, hobby: "learn tech" },
  });
});

module.exports = router;
