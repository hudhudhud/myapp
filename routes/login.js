var express = require('express');
var router = express.Router();
var user_bus=require('../db/user_bus')
var crypto = require('crypto')


router.get('/',function(req, res, next) {
	res.render('login');
})

router.post('/', async function(req, res, next) {
	var obj={name:req.body.name,pwd:req.body.pwd}
	var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
    obj.pwd= md5.update(obj.pwd).digest('hex');//加密后的密码
    var msg=""
	try{
		var data=await user_bus.findOne(obj)
		if(data){
			//res.render('login',{msg:"登录成功"});
			console.log("登录成功:"+data)
			msg="登录成功"
		}
		else{
			var data=await user_bus.findByName(req.body.name)
			if(data){
				//res.render('login',{err:"密码错误"});
				console.log("密码错误")
				msg="密码错误"
			}
			else{
				//res.render('login',{err:"账号不存在"});
				console.log("账号不存在")
				msg="账号不存在"
			}
		}
		res.json({data,msg})
	}
	catch(e){
		//res.render('login',{e});
		console.log(e)
	}
});

module.exports = router;
