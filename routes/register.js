var express = require('express');
var router = express.Router();
var user_bus=require('../db/user_bus')
var crypto = require('crypto')

router.get('/',function(req, res, next) {
	res.render('register');
})


router.post('/', async function(req, res, next) {
	var obj={name:req.body.name,pwd:req.body.pwd,birth:req.body.birth}
	var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
    obj.pwd= md5.update(obj.pwd).digest('hex');//加密后的密码
	try{
		var data=await user_bus.findByName(obj.name)
		if(data){
			console.log("该用户名已注册")
			res.render('register',{err:"该用户名已注册"});
		}
		else{
			data=await user_bus.insert(obj)
			if(data){
				console.log("注册成功")
				res.render('register',{msg:"注册成功"});
			}
		}
	}
	catch(e){
		console.log(e)
		res.render('register',{e});
	}
});

module.exports = router;
