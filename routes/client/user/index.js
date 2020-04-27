let  express = require('express');
let router = express.Router(); 

router.get("/",(req,res)=>{
    // res.render("login");
    res.send({name:'zs',age:100})
});
router.get("/reg",(req,res)=>{
    res.render("reg");
});

//导出去暴露使用
module.exports = router;