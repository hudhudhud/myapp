var mongoose = require('./db.js')
var Schema = mongoose.Schema

var AdminSchema = new Schema({          
    name :{ type: String , index: true},        //用户账号
    nickName:{type: String}, 
    gender:{type: Number},//值为1时是男性，值为2时是女性，值为0时是未知
    pwd: {type: String},                        //密码    
    logindate : { type: Date,default:Date.now},                  //最近登录时间
    regidate:{type:Date,default:Date.now},
});

module.exports = mongoose.model('admin',AdminSchema);
