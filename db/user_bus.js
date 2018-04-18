var User = require('./user.js')

//改
exports.insert=function(obj) {
    var user = new User(obj)
    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}

exports.update=function(where,update) {
    // var where = {'username' : 'Tracy McGrady'};
    // var update = {'userpwd': 'zzzz'};
    User.update(where, update, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

exports.remove=function(where){
    //var wherestr = {'username' : 'Tracy McGrady'};
    User.remove(where, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

//查

//  show = {"username": 1 ,"_id": 0};
//  输出只会有username字段，设置方法如上，1表示查询输出该字段，0表示不输出
exports.find=function(where,show={},cb) {
    User.find(where,show,function (err, res) {
        cb({err,res})
    });
}

exports.findByIdAndUpdate=function(id,update){
    // var id = '56f2558b2dd74855a345edb2';
    // var updatestr = {'userpwd': 'abcd'};
    User.findByIdAndUpdate(id, update, function(err, res){
       return {err,res}
    })
}

exports.getCount=function(wherestr) {
    User.count(wherestr, function(err, res){
       return {err,res}
    })
}