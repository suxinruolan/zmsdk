/*
 * @Github: 我没有
 * @Author: 李鹏帅
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 * @since: 2019-07-09 08:27:34
 * @lastTime: 2019-10-11 17:48:53
 * @LastAuthor: Do not edit
 * @message: 
 */
const express = require('express')
const app = express();
const serve = require('express-static');
const uuidv1 = require('uuid/v1');//生成uuid
var cors = require('cors')
var genSignature = require('./secret');//加米解密

//加密解密  账号密码
var appid = '5d2302419e491a95b37e43b9';
var secret = '4a36ff6b1e4d458ba872a7200b73aa64';
// var bodyParser = require('body-parser'); //对post请求的请求体进行解析模块
app.use(cors())
app.get('/login', (req, res) => {
  let norce = String(uuidv1())
  norce = norce.split("-").join("");
  let json = {
    "appid": appid,
    "timestamp": (new Date().getTime() / 1000).toFixed(0) + "",
    "norce": norce
  }
  let sign = genSignature(secret, json)
  let data = {}
  data = json
  Object.assign(data, { 'sign': sign })
  res.json({'state':0,'data': JSON.stringify(data)})
})
console.log('__dirname', __dirname);
app.use(serve(__dirname + '/public'));
app.listen(3001, () => console.log('Example app listening on port 3001!'));