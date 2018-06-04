var mongoose = require('./db.js')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({    
    catg:{type:String, required:true} ,
    title :{type:String,trim:true},
    desc:String,
    details:String,
    coverImg:String,
    sliderImgs:[String],
    spec:[Schema.Types.Mixed],//{name:"番茄",val:"2kg"} or {name:"颜色",content:[{default:true,val:"红色",img:"a.jpg"},{val:"绿色",img:"b.jpg"}]}
    tags:[Schema.Types.Mixed],
    zanUserIds:[String],//赞的用户id数组      
    createDate:{ type: Date, default: Date.now },
    modifyDate:Date,
    publishDate:Date,
});

module.exports = mongoose.model('article',ArticleSchema);
