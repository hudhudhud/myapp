var express = require('express');
var router = express.Router();
var user_bus=require('../db/user_bus')


router.get('/',function(req, res, next) {
	res.render('login');
})

router.post('/', function(req, res, next) {
	var obj={name:req.body.name,pwd:req.body.pwd}
	user_bus.find(obj,{},({res,err})=>{
			console.log(res)
			if(res){
				console.log("登录成功")
			}
			else{
				console.log("登录失败")
			}
	})
});

module.exports = router;
