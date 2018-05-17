var mongoose = require('./db.js')
var Schema = mongoose.Schema

var UserSchema = new Schema({          
    name :{ type: String , index: true},        //用户账号
    nickName:{type: String}, 
    gender:{type: Number},//值为1时是男性，值为2时是女性，值为0时是未知
    pwd: {type: String},                        //密码
    birth: {type: Date},    //生日
    city: {type: String}, 
    province: {type: String}, 
    country: {type: String},    
    phone: {type:String},
    avatarUrl:{type:String}, 
    tags:[Schema.Types.Mixed], //便签        
    logindate : { type: Date,default:Date.now}, //最近登录时间
    regidate:{type:Date,default:Date.now},
    wxcode:{type:String},
    origin:{type:String},//[{name:"微信授权用户",val:"1"},{name:"手机号注册用户",val:"2"},{name:"完善信息用户",val:"3"}],

});

module.exports = mongoose.model('users',UserSchema);
