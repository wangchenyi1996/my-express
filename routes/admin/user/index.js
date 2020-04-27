let  express = require('express');
let router = express.Router(); 

router.get("/",(req,res)=>{
    res.render("admin/index");
});
router.get("/list",(req,res)=>{
    // res.render("admin/list");
    res.send({name:'abc',age:100})
});
router.get("/img",(req,res)=>{
    res.render("admin/index");
});
//导出去暴露使用
module.exports = router;