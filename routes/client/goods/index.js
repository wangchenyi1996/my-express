/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-13 12:05:58
 * @LastEditors: 王强
 * @LastEditTime: 2020-07-08 09:14:07
 */ 
let  express = require('express');
let router = express.Router(); 

router.get("/",(req,res)=>{
    res.json({name:123456})
    // res.render("index");
});

router.get("/list",(req,res)=>{
    // res.render("list");
    res.json({name:123456})
});
router.get("/tests",(req,res)=>{
    res.json({name:'张三'});
});

//导出去暴露使用
module.exports = router;