let  express = require('express');
let router = express.Router(); 

router.get("/",(req,res)=>{
    res.render("index");
});

router.get("/list",(req,res)=>{
    res.render("list");
});
router.get("/tests",(req,res)=>{
    res.json({name:'张三'});
});

//导出去暴露使用
module.exports = router;