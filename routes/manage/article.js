var express = require('express');
var router = express.Router();
var fs=require("fs")
var article_bus=require('../../db/article_bus')

router.get('/',async function(req, res, next) {
	var err=""
	try{
		var data=await article_bus.find()
		if(data){
			res.json(data)
		}
		else{
			res.json({fail:"失败"})
		}
	}
	catch(err){
		res.json({err})
		console.log(err)
	}

})
router.get('/add',function(req, res, next) {


})
router.post('/add',async function(req, res, next) {
	var obj={
		catg:req.body.catg,
		title:req.body.title,
		desc:req.body.desc,
		details:req.body.details,
		coverImg:req.body.coverImg,
		sliderImgs:JSON.parse(req.body.sliderImgs),
		spec:JSON.parse(req.body.spec),
    	publishDate:req.body.publishDate,
	}
	
    var msg="",err=""
	try{
		console.log(obj)
		var data=await article_bus.insert(obj)
		if(data){
			console.log("插入成功")
			res.json({success:"插入成功"})
		}
		else{
			console.log("插入失败")
			res.json({fail:"插入失败"})
		}
	}
	catch(err){
		res.json({err})
		console.log(err)
	}
})



module.exports = router;