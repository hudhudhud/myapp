const MongoClient = require('mongodb').MongoClient;
// var mongoose = require('mongoose');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/myapp';


// var Schema = mongoose.Schema;   //  创建模型
// var userScheMa = new Schema({
// 	name: String,
// 	password: String
// }); //  定义了一个新的模型，但是此模式还未和users集合有关联
// exports.user = db.model('users', userScheMa);


// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    //var dbase = db.db("myapp");
    // dbase.createCollection('users', function (err, res) {
    //     if (err) throw err;
    //     console.log("创建集合!");
    //     db.close();
    // });
    var dbo = db.db("myapp");
    var myobj =  {name : "hd",password:"123",wxCode:""}
    dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });

});

const insertDocuments = function(db, callback){
  // Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertMany([
    {name : "cc",password:"123",wxCode:""}, {name : "hd",password:"123",wxCode:""}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 2 documents into the collection");
    callback(result);
  });
}

