var mongoose = require('./db.js')
var Schema = mongoose.Schema

var UserSchema = new Schema({          
    name :{ type: String },                    //用户账号
    pwd: {type: String},                        //密码
    birth: {type: Date},                        //生日
    logindate : { type: Date},                  //最近登录时间
    regidate:{type:Date},
    wxcode:{type:String},
});

module.exports = mongoose.model('users',UserSchema);
