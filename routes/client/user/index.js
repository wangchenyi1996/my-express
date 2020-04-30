let express = require('express');
let router = express.Router();

let userModel = require('../../../db/schemas/users')

/**
 * 插入 单条数据 / 多条数据
 * params: data 可是是对象或者数组
 */
function insert(data) {
    return userModel.create(data)
}

/**
 * 查询
 * condition ：查询条件 可以使用正则表达式
 * options 表示 需要查找的字段 1需要展示 0不需要展示  没写的默认不查找
 * limit 可以用来分页
 */
function findAll(condition = {}, options = {}, limit = null) {
    return userModel.find(condition, options, limit)
}

router.get("/", (req, res) => {
    // findAll({},{ username:1,email:1,_id:0 }).then((data) => {
    // findAll({username:/王/},{ username:1,email:1,_id:0 }).then((data) => {
    // findAll({},{ username:1,email:1,_id:0 },{limit:3,skip:2}).then((data) => {
    // res.json(data)
    // }).catch((err) => {
    //     console.log(err);
    // });

    res.render("login");
});

router.get("/reg", (req, res) => {
    res.render("reg");
});

router.post("/handlereg", (req, res) => {
    // let user = {
    //     username: '王1五',
    //     pwd: '123wav',
    //     age: 18,
    //     email: 'wdw163@qq.com',
    //     loginTime: new Date()
    // }
    // insert(user).then((data) => {
    //     console.log('用户:', data);
    // }).catch((err) => {
    //     console.log(err);
    // });

    console.log('传递参数：',req.body.username)
    res.send(req.body);
});

//导出去暴露使用
module.exports = router;