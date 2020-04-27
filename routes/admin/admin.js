let  express = require('express');
let user = require('./user/index');

let router = express.Router();  //路由拆分使用

router.use('/user', user);

module.exports = router;