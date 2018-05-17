var Admin = require('./admin.js')


//查

//  show = {"Adminname": 1 ,"_id": 0};
//  输出只会有Adminname字段，设置方法如上，1表示查询输出该字段，0表示不输出
exports.find=function(where,show={}) {
     return Admin.find(where,show).exec()
}

exports.findOne=function(where,show={}) {
     return Admin.findOne(where,show).exec()
}

exports.findByName=function(name,show={}) {
     return Admin.findOne({name},show).exec()
}



exports.findByIdAndUpdate=function(id,update){
    // var id = '56f2558b2dd74855a345edb2';
    // var updatestr = {'Adminpwd': 'abcd'};
    return Admin.findByIdAndUpdate({id, update}).exec()
}
exports.getCount=function(wherestr) {
    return Admin.count(wherestr).exec()
}

//改
exports.insert=function(obj) {
    var admin = new Admin(obj)
    return admin.save()
}

exports.update=function(where,update) {
    // var where = {'Adminname' : 'Tracy McGrady'};
    // var update = {'Adminpwd': 'zzzz'};
    // Admin.update(where, update, function(err, res){
    //     if (err) {
    //         console.log("Error:" + err);
    //     }
    //     else {
    //         console.log("Res:" + res);
    //     }
    // })
    return Admin.update(where, update).exec()
}

exports.remove=function(where){
    //var wherestr = {'Adminname' : 'Tracy McGrady'};
    return Admin.remove(where)
}

