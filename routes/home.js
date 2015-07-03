var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: "主页", user: req.session.user});
});

module.exports = router;
