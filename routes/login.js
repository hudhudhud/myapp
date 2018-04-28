var express = require('express');
// const cookieParse = require('cookie-parser')
var router = express.Router();
var user_bus=require('../db/user_bus')
var infoCode=require('../public/js/infoCode')
var crypto = require('crypto')


router.get('/',function(req, res, next) {
	console.log("11111111111",req.session.users,req.signedCookies)
	var user=req.session.users? req.session.users[req.signedCookies.session_id] : null
	if(user){
		res.json({user})
	}
	else{
		res.json({})
	}
})

router.get('/out', function(req, res, next) {
	try{
		console.log("登出",req.session.users,req.signedCookies.session_id)
		  if (req.session.users && req.session.users[req.signedCookies.session_id]) {
		    delete req.session.users[req.signedCookies.session_id]
		  }
		  res.clearCookie('session_id')
		  res.json({msg:infoCode["S0002"]})
	}
	catch(e){
		console.log(e)
	}
})

router.post('/', (async function(req, res, next){
	var obj={name:req.body.name,pwd:req.body.pwd}
	var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
    obj.pwd= md5.update(obj.pwd).digest('hex');//加密后的密码
    var msg="",err=""
	try{
		var user=await user_bus.findOne(obj)
		if(user){
			msg=infoCode["S0001"]
			//console.log(msg+user,user._id)
			res.cookie("session_id", user._id, {
		      signed: true,
		      //httpOnly: true,
		      expires: new Date(Date.now() + 3600000),//过期时间为1个小时
		      domain: 'iamabj.club',
		    })
		    if(!req.session){
		    	req.session={}
		    }
		    if (!req.session.users) {
		      req.session.users = {}
		    }
		    req.session.users[user._id] = user
		    console.log("登录",req.session.users)
		}
		else{
		    user=await user_bus.findByName(req.body.name)
			if(user){
				err=infoCode["F0001"]
			}
			else{
				err=infoCode["F0002"]
			}
		}
		res.json({user,msg,err})
	}
	catch(err){
		res.json({err})
		console.log(err)
	}
}))

module.exports = router;
