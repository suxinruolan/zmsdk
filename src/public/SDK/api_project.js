define({
  "name": "ZmGameSdk",
  "version": "0.0.0",
  "description": "真漫公司对外开放游戏sdk",
  "title": "gameSdk",
  "url": "ZMIM.",
  "header": {
    "title": "简介",
    "content": "<h1>接口调用说明</h1>\n<blockquote>\n<p>所有接口通过zmim对象来调用，参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：\nsuccess：接口调用成功时执行的回调函数。\nerror：接口调用失败时执行的回调函数。\ncomplete：接口调用完成时执行的回调函数，无论成功或失败都会执行。</p>\n</blockquote>\n<pre><code>  这里的方法大部分使用了es6规范 可以使用promise回调\n  eg1:\n  ZMIM.config()\n      //成功回调\n      .then(res=&gt;{})\n      //失败回调\n      .catch(err=&gt;{})\n  eg2:\n  ZMIM.config({\n    //成功回调\n    success(){},\n    //失败回调\n    error(){},\n    //成功和失败都会回调\n    complete(){},\n  })\n</code></pre>\n<p><a href=\"/public/ZM/process.html\">登陆流程</a> [下载](<a href=\"/public/ZM/process.doc\" download=\"process.doc\">process.doc</a>)</p>\n<h1>JS-SDK使用权限签名算法</h1>\n<blockquote>\n<p>生成签名之前必须先了解一下jsapi_ticket，jsapi_ticket是用于调用ZMIM JS接口的临时票据。正常情况下，jsapi_ticket的有效期为7200秒，通过access_token来获取。由于获取jsapi_ticket的api调用次数受限，频繁刷新jsapi_ticket会导致api调用受限，影响自身业务，第三方开发者必须在自己的服务全局缓存jsapi_ticket 。\n请参考<a href=\"http://support.dun.163.com/documents/2018041901?docId=150425561197629440\">这里</a>详细的签名算法，也可以参考下边其他&gt;demo&gt;server 下的nodejs源码</p>\n</blockquote>\n<h2>1.获取access_token</h2>\n<blockquote>\n<p>参考《第三方应用》文档中“基础支持-&gt;获取access token”</p>\n</blockquote>\n<h2>2.3.1.2获取jsapi_ticket</h2>\n<blockquote>\n<p>用获取的access token 采用http GET方式请求获得jsapi_ticket\n缺调用接口地址，后期补上</p>\n</blockquote>\n<h2>3.3.1.3生成JS-SDK权限验证签名</h2>\n<h3>签名算法</h3>\n<blockquote>\n<p>签名生成规则如下：参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&amp;key2=value2…）拼接成字符串string1。这里需要注意的是所有参数名均为小写字符。对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义。即signature=sha1(string1)。\n示例：\nnoncestr=Wm3WZYTPz0wzccnW\nsapi_ticket= sapi_ticket\ntimestamp=1414587457\nurl=http://www.9must.com?params=value\n步骤1. 对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&amp;key2=value2…）拼接成字符串\nstring1:jsapi_ticket=jsapi_ticket&amp;noncestr=Wm3WZYTPz0wzccnW&amp;timestamp=1414587457&amp;url=http://www.9must.com?params=value\n步骤2. 对string1进行sha1签名\nsignature：0f9de62fce790f9a083d5c99e95740ceb90c27ed</p>\n</blockquote>\n<h3>注意事项</h3>\n<blockquote>\n<p>签名用的noncestr和timestamp必须与must.config中的noncestr和timestamp相同。\n签名用的url必须是调用JS接口页面的完整URL。\n出于安全考虑，第三方开发者必须在服务器端实现签名的逻辑。</p>\n</blockquote>\n"
  },
  "footer": {
    "title": "其他",
    "content": "<p>[toc]</p>\n<h1>code 参数</h1>\n<blockquote>\n<p>9开头的标识app报错 5位数标识服务器报错</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>code</th>\n<th>msg</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>9001</td>\n<td>该API无法在当前系统下运行 app报错</td>\n</tr>\n<tr>\n<td>10010</td>\n<td>tptoken过期</td>\n</tr>\n<tr>\n<td>10011</td>\n<td>token过期</td>\n</tr>\n<tr>\n<td>10012</td>\n<td>API不存在</td>\n</tr>\n<tr>\n<td>10013</td>\n<td>签名错误</td>\n</tr>\n<tr>\n<td>401</td>\n<td>登陆错误</td>\n</tr>\n<tr>\n<td>500</td>\n<td>请求失败</td>\n</tr>\n</tbody>\n</table>\n<h1>sdk 下载</h1>\n<p><a href=\"/ZM/sdk.js\" download=\"sdk\">gameSDK</a></p>\n<p style=\"color:red\">请新建一个命名为androidSdk的js文件,该文件的加载必须要在游戏加载之前<p>\n<h1>demo 下载</h1>\n<p>将该地址放入十个人app可以进行游戏预览:http://192.168.199.195:3001/biyishuangfei/index.html?cljljl=rrt&amp;wydtt=game&amp;gameId=5d493cb3c6c5ee0001b1a7d3</p>\n<h2>server</h2>\n<table>\n<thead>\n<tr>\n<th>语言</th>\n<th>下载地址</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>nodejs</td>\n<td><a href=\"/DEMO/server/nodejs.zip\" download=\"nodejsServerDemo.zip\">nodejs server demo</a></td>\n</tr>\n</tbody>\n</table>\n<h2>client</h2>\n<blockquote>\n<p>目前我们只有cocos creator 的示例demo，后续我们将添加其他引擎的demo，给您造成的不便敬请谅解</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>引擎</th>\n<th>下载地址</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>cocos creator</td>\n<td><a href=\"/DEMO/client/cocosCreator/biyishuangfei.zip\" download=\"cocosCreatorDemo.zip\">cocos creator demo</a></td>\n</tr>\n</tbody>\n</table>\n"
  },
  "order": [
    "user",
    "resurrection",
    "ranking",
    "score",
    "mobile"
  ],
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2019-10-15T07:34:27.412Z",
    "url": "http://apidocjs.com",
    "version": "0.17.7"
  }
});
