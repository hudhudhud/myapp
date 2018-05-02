var express = require('express');
// const cookieParse = require('cookie-parser')
var router = express.Router();
var request=require('request')
//require('express-async-errors')
var user_bus=require('../db/user_bus')
var infoCode=require('../public/js/infoCode')
var crypto = require('crypto')


router.get('/',function(req, res, next) {
	console.log("11111111111",req.session.users,req.signedCookies)
	var user=req.session.users? req.session.users[req.signedCookies.session_id] : null
	if(user){
		res.json({user:true})
	}
	else{
		res.json({})
	}
})
router.get('/wx',function(req, res, next) {
	console.log("11111111111",req.session.users,req.signedCookies)//,req.header("session_id")
	var user=req.session.users? req.session.users[req.signedCookies.session_id] : null
	if(user){
		res.json({user:true})
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
	console.log("web提交")
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
		      httpOnly: true,
		      expires: new Date(Date.now() + 3600000),//过期时间为1个小时
		      //domain: 'iamabj.club',
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


router.get('/wx/loginByWxcode', (async function(req, res, next){
	console.log("wx 登录",req.query.userInfo)
	let code=req.query.code
	let userinfo=JSON.parse(req.query.userInfo)
	//{"nickName":"iamabj","gender":2,"language":"zh_CN"…RnSTsMEJtQ792cfuoehcYMxvnhqnkfTZ4DTljg9DZXAzA/0"}
	console.log("userInfo="+userinfo.nickName)
	request.get({
    uri: 'https://api.weixin.qq.com/sns/jscode2session',
    json: true,
    qs: {
	      grant_type: 'authorization_code',
	      appid: 'wxedbecee63dd53475',
	      secret: '30cb3a4bf3ca35e0bc51fcdf9328d562',
	      js_code: code
	    }
	}, 
	async (err, response, data) => {
	    if (response.statusCode === 200) {
			    console.log("[openid]=",data.openid)
			    console.log("[session_key]=", data.session_key)
				var msg="",err=""
			    if(data.openid&&data.session_key){
				    //TODO: 生成一个唯一字符串sessionid作为键，将openid和session_key作为值，存入redis，超时时间设置为2小时
				    //伪代码: redisStore.set(sessionid, openid + session_key, 7200)
					try{
						var user=await user_bus.findByWxcode(data.openid)
						if(user){
							msg=infoCode["S0001"]
						}
						else{
							user=await user_bus.insert(Object.assign({name:userinfo.nickName,wxcode:data.openid},userinfo))
						}
						if(user){
							if(!req.session){
						    	req.session={}
						    }
						    if (!req.session.users) {
						      req.session.users = {}
						    }
						    req.session.users[user._id] = user
							res.json({msg,"session_id":user._id})
							console.log("session_id=",user._id,"req.ssession=",req.session)
						}
						else{
							res.json({err:infoCode["F0003"]})
						}
					}
					catch(err){
						res.json({err})
						console.log(err)
					}
			    }
			    else{
			    	res.json({err:infoCode["F0004"]})
			    }

	    } else {
	      console.log("[error]", err)
	      res.json(err)
	    }
  	})
}))

module.exports = router;
