let  express = require('express');
let user = require('./user/index');

let router = express.Router();  //路由拆分使用

// 中间件，每次请求接口都会先访问它
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.use('/user', user);

module.exports = router;