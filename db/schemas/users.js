/**
 * 用户信息
 */
let mongoose = require('../dbConfig.js'),
    Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: { type: String,required: true },     //用户账号
    pwd: { type: String,required: true },          //密码
    age: { type: Number , default:18 },            //年龄
    email: { type: String },                       //邮箱
    logintime: { type: Date,default: Date.now }    //最近登录时间
},{
    collection: 'users',
  });

module.exports = mongoose.model('userModel',UserSchema);

