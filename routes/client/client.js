let express = require('express');
let client = require('./goods/index');
let user = require('./user/index');

let router = express.Router();  //路由拆分使用

router.use('/', user);
router.use('/client', client);

module.exports = router;
