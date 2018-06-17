var express = require('express');
var router = express.Router();
var fs = require("fs")
var infoCode = require('../../public/js/infoCode')
var article_bus = require('../../db/article_bus')
var user_bus = require('../../db/user_bus')


var redis = require("redis"),
	client = redis.createClient()

client.on("error", function(err) {
	console.log("redis Error " + err);
});



router.get('/add', function(req, res, next) {

})

router.post('/api/add', async function(req, res, next) {
	var obj = {
		catg: req.body.catg,
		title: req.body.title,
		desc: req.body.desc,
		details: req.body.details,
		coverImg: req.body.coverImg,
		sliderImgs: JSON.parse(req.body.sliderImgs),
		spec: JSON.parse(req.body.spec),
		tags: JSON.parse(req.body.tags),
		publishDate: req.body.publishDate,
	}

	var msg = "",
		err = ""
	try {
		console.log(obj)
		var data = await article_bus.insert(obj)
		if (data) {
			console.log("插入成功")
			res.json({
				success: "插入成功"
			})
		} else {
			console.log("插入失败")
			res.json({
				fail: "插入失败"
			})
		}
	} catch (err) {
		res.json({
			err
		})
		console.log(err)
	}
})
router.get('/api', async function(req, res, next) {
	var err = ""
	try {
		console.log(req.query)
		var searchObj = {},
			data
		if (req.query) {
			if (req.query.catg && req.query.catg > 0) {
				searchObj.catg = req.query.catg
			}
			if (req.query.search) {
				searchObj.title = new RegExp(req.query.search, "gim")
			}
		}
		if (Object.keys(searchObj).length > 0) {
			data = await article_bus.find(searchObj)
		} else {
			data = await article_bus.find()
		}
		if (data) {
			res.json(data)
		} else {
			res.json({
				fail: "失败"
			})
		}
	} catch (err) {
		res.json({
			err
		})
		console.log(err)
	}

})



router.get('/api/:id', async function(req, res, next) {
	var err = ""
	try {
		var data = await article_bus.findById(req.params.id)
		if (data) {
			res.json(data)
		} else {
			res.json({
				fail: "失败"
			})
		}
	} catch (err) {
		res.json({
			err
		})
		console.log(err)
	}
})


router.post('/api/:id', async function(req, res, next) {
	var obj = {
		catg: req.body.catg,
		title: req.body.title,
		desc: req.body.desc,
		details: req.body.details,
		coverImg: req.body.coverImg,
		sliderImgs: JSON.parse(req.body.sliderImgs),
		spec: JSON.parse(req.body.spec),
		tags: JSON.parse(req.body.tags),
		modifyDate: req.body.modifyDate,
		publishDate: req.body.publishDate,
	}

	var msg = "",
		err = ""
	try {
		console.log(obj)
		var data = await article_bus.update({
			"_id": req.params.id
		}, obj)
		if (data) {
			console.log("更新成功", req.params.id)
			res.json({
				success: "更新成功",
				"_id": req.params.id
			})
		} else {
			console.log("更新失败", req.params.id)
			res.json({
				fail: "更新失败",
				"_id": req.params.id
			})
		}
	} catch (err) {
		res.json({
			err
		})
		console.log(err)
	}
})

router.get('/api/zan/:id/:sta', async function(req, res, next) {
	try {

		var session_id = req.header("session_id")
		var user = client.get(session_id)
		if (user) {
			var data = await article_bus.findById(req.params.id)
			var user = await user_bus.findById(session_id)
			var sta = parseInt(req.params.sta)
			if (data && user) {
				if (data.zanUserIds) {
					if (data.zanUserIds.indexOf(user._id) > -1) {
						if (!sta) data.zanUserIds.splice(data.zanUserIds.indexOf(user._id), 1)
					} else {
						if (sta) data.zanUserIds.push(user._id)
					}
				} else {
					data.zanUserIds = []
					if (sta) data.zanUserIds.push(user._id)
				}

				if (user.zanArtIds) {
					if (user.zanArtIds.indexOf(req.params.id) > -1) {
						if (!sta) user.zanArtIds.splice(user.zanArtIds.indexOf(req.params.id), 1)
					} else {
						if (sta) user.zanArtIds.push(req.params.id)
					}
				} else {
					user.zanArtIds = []
					if (sta) user.zanArtIds.push(req.params.id)
				}

				var isSuccess1 = await article_bus.update({
					"_id": req.params.id
				}, {
					zanUserIds: data.zanUserIds
				})
				var isSuccess2 = await user_bus.update({
					"_id": user._id
				}, {
					zanArtIds: user.zanArtIds
				})
				console.log(3333333333333333333333333, "user.id=" + user._id, "user:", user)
				if (isSuccess1 && isSuccess2) {
					console.log("点赞成功！")
					res.json({
						success: "点赞成功！",
						zanUserIds: data.zanUserIds
					})
				} else {
					console.log("点赞失败！")
					res.json({
						fail: "点赞失败！"
					})
				}
			} else {
				res.json({
					err: "用户或文章不存在"
				})
			}
		} else {
			res.json({
				errCode: "F0005",
				info: infoCode["F0005"]
			})
		}
	} catch (e) {
		console.log("点赞失败！", e)
		res.json({
			err: "操作失败：" + e
		})
	}
})
module.exports = router;