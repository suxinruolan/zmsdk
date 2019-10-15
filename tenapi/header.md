# 接口调用说明
>所有接口通过zmim对象来调用，参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：
success：接口调用成功时执行的回调函数。
error：接口调用失败时执行的回调函数。
complete：接口调用完成时执行的回调函数，无论成功或失败都会执行。
````
  这里的方法大部分使用了es6规范 可以使用promise回调
  eg1:
  ZMIM.config()
      //成功回调
      .then(res=>{})
      //失败回调
      .catch(err=>{})
  eg2:
  ZMIM.config({
    //成功回调
    success(){},
    //失败回调
    error(){},
    //成功和失败都会回调
    complete(){},
  })
````
 [登陆流程](/public/ZM/process.html) [下载](<a href="/public/ZM/process.doc" download="process.doc">process.doc</a>)
  
# JS-SDK使用权限签名算法
>生成签名之前必须先了解一下jsapi_ticket，jsapi_ticket是用于调用ZMIM JS接口的临时票据。正常情况下，jsapi_ticket的有效期为7200秒，通过access_token来获取。由于获取jsapi_ticket的api调用次数受限，频繁刷新jsapi_ticket会导致api调用受限，影响自身业务，第三方开发者必须在自己的服务全局缓存jsapi_ticket 。
请参考[这里](http://support.dun.163.com/documents/2018041901?docId=150425561197629440)详细的签名算法，也可以参考下边其他>demo>server 下的nodejs源码
## 1.获取access_token
>参考《第三方应用》文档中“基础支持->获取access token” 

## 2.3.1.2获取jsapi_ticket
>用获取的access token 采用http GET方式请求获得jsapi_ticket
缺调用接口地址，后期补上

## 3.3.1.3生成JS-SDK权限验证签名
### 签名算法 
>签名生成规则如下：参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1。这里需要注意的是所有参数名均为小写字符。对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义。即signature=sha1(string1)。
  示例： 
  noncestr=Wm3WZYTPz0wzccnW
  sapi_ticket= sapi_ticket
  timestamp=1414587457
  url=http://www.9must.com?params=value
  步骤1. 对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串
  string1:jsapi_ticket=jsapi_ticket&noncestr=Wm3WZYTPz0wzccnW&timestamp=1414587457&url=http://www.9must.com?params=value
  步骤2. 对string1进行sha1签名
  signature：0f9de62fce790f9a083d5c99e95740ceb90c27ed
### 注意事项 
>签名用的noncestr和timestamp必须与must.config中的noncestr和timestamp相同。 
签名用的url必须是调用JS接口页面的完整URL。
出于安全考虑，第三方开发者必须在服务器端实现签名的逻辑。