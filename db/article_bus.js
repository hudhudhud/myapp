var Article = require('./article.js')


//查

//  show = {"username": 1 ,"_id": 0};
//  输出只会有username字段，设置方法如上，1表示查询输出该字段，0表示不输出
exports.find=function(where,show={}) {
     return Article.find(where,show).exec()
}

exports.findOne=function(where,show={}) {
     return Article.findOne(where,show).exec()
}

exports.findById=function(id,show={}) {
     return Article.findById(id).exec()
}
exports.findByName=function(name,show={}) {
     return Article.findOne({name},show).exec()
}

exports.findByWxcode=function(wxcode,show={}) {
     return Article.findOne({wxcode},show).exec()
}

exports.findByIdAndUpdate=function(id,update){
    // var id = '56f2558b2dd74855a345edb2';
    // var updatestr = {'userpwd': 'abcd'};
    return Article.findByIdAndUpdate({id, update}).exec()
}
exports.getCount=function(wherestr) {
    return Article.count(wherestr).exec()
}

//改
exports.insert=function(obj) {
    var article = new Article(obj)
    article.markModified('spec')
    article.markModified('publishDate');
    return article.save()
}

exports.update=function(where,update) {
    // var where = {'username' : 'Tracy McGrady'};
    // var update = {'userpwd': 'zzzz'};
    // User.update(where, update, function(err, res){
    //     if (err) {
    //         console.log("Error:" + err);
    //     }
    //     else {
    //         console.log("Res:" + res);
    //     }
    // })
    return Article.update(where, update).exec()
}

exports.remove=function(where){
    //var wherestr = {'username' : 'Tracy McGrady'};
    return Article.remove(where)
}

