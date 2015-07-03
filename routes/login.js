var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: '用户登陆' });
});

//post
router.post("/", function(req, res){
	var user = {
		username: "gauze",
		userpwd: "ln201314"
	};

	if(req.body.username == user.username && req.body.userpwd == user.userpwd){
		req.session.user = user;
		req.flash('success','登入成功');
		res.redirect("/home");
	}else{
		res.redirect("/login");
	}
	
});

module.exports = router;
