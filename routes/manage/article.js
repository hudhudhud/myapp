var express = require('express');
var router = express.Router();
var fs=require("fs")
var article_bus=require('../../db/article_bus')


router.get('/add',function(req, res, next) {

})

router.post('/api/add',async function(req, res, next) {
	var obj={
		catg:req.body.catg,
		title:req.body.title,
		desc:req.body.desc,
		details:req.body.details,
		coverImg:req.body.coverImg,
		sliderImgs:JSON.parse(req.body.sliderImgs),
		spec:JSON.parse(req.body.spec),
		tags:JSON.parse(req.body.tags),
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
router.get('/api',async function(req, res, next) {
	var err=""
	try{
		console.log(req.query)
		var searchObj={},data
		if(req.query){
			if(req.query.catg&&req.query.catg>0){
				searchObj.catg=req.query.catg
			}
			if(req.query.search){
				searchObj.title=new RegExp(req.query.search,"gim")
			}
		}
		if(Object.keys(searchObj).length>0){
			 data=await article_bus.find(searchObj)
		}
		else{
			data=await article_bus.find()
		}
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



router.get('/api/:id',async function(req, res, next) {
	var err=""
	try{
		var data=await article_bus.findById(req.params.id)
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


router.post('/api/:id',async function(req, res, next) {
	var obj={
		catg:req.body.catg,
		title:req.body.title,
		desc:req.body.desc,
		details:req.body.details,
		coverImg:req.body.coverImg,
		sliderImgs:JSON.parse(req.body.sliderImgs),
		spec:JSON.parse(req.body.spec),
		tags:JSON.parse(req.body.tags),
		modifyDate:req.body.modifyDate,
    	publishDate:req.body.publishDate,
	}
	
    var msg="",err=""
	try{
		console.log(obj)
		var data=await article_bus.update({"_id":req.params.id},obj)
		if(data){
			console.log("更新成功",req.params.id)
			res.json({success:"更新成功","_id":req.params.id})
		}
		else{
			console.log("更新失败",req.params.id)
			res.json({fail:"更新失败","_id":req.params.id})
		}
	}
	catch(err){
		res.json({err})
		console.log(err)
	}
})
module.exports = router;