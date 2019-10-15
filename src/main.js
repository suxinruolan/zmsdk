/*
 * @Github: 我没有
 * @Author: 李鹏帅
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 * @since: 2019-10-11 14:55:02
 * @lastTime: 2019-10-11 14:58:16
 * @LastAuthor: Do not edit
 * @message: 
 */
const express = require('express')
const app = express();
const serve = require('express-static');
app.use(serve(__dirname + '/public'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));