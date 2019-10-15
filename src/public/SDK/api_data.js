define({ "api": [
  {
    "type": "function",
    "url": "currentScreenState(param)",
    "title": "currentScreenState——存在bug",
    "name": "currentScreenState",
    "group": "mobile",
    "description": "<p>tabel切换  state=yes no</p>",
    "success": {
      "fields": {
        "-": [
          {
            "group": "-",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>yes标识当游戏页面 no表示其他页面.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 0 OK\n{\n   state:'yes'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "mobile"
  },
  {
    "type": "function",
    "url": "showJOJOAlert(param)",
    "title": "showJOJOAlert",
    "name": "showJOJOAlert",
    "group": "mobile",
    "description": "<p>app的弹窗事件 带确定按钮</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>文本描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "'帅'",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "mobile"
  },
  {
    "type": "function",
    "url": "showShareAlert()",
    "title": "showShareAlert",
    "name": "showShareAlert",
    "group": "mobile",
    "description": "<p>分享弹窗 这里知识给了一个弹窗消失的回调 并不能够判断当前用户是否真正的分享了链接</p>",
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "mobile"
  },
  {
    "type": "function",
    "url": "showTips(param)",
    "title": "showTips",
    "name": "showTips",
    "group": "mobile",
    "description": "<p>app的弹窗事件 如果不做任何操作他会在2秒后自动关闭(就相当于做了cancle 操作)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>文本描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "'帅'",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "mobile"
  },
  {
    "type": "function",
    "url": "getFriendRanking(param)",
    "title": "getFriendRanking",
    "name": "getFriendRanking",
    "group": "ranking",
    "description": "<p>获取好友排行榜</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>请求的页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>每页的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"count\": 10,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "0": [
          {
            "group": "0",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "0",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>返回的值.</p>"
          },
          {
            "group": "0",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>返回一个对象数组 排名是数组的index顺序.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户的userid.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户的昵称.</p>"
          },
          {
            "group": "0",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>用户的性别（1 男 2 女）.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "headImg",
            "description": "<p>用户的头像地址</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "row",
            "description": "<p>用户的排名</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>当前用户的分数</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>当前用户的信息 当然你可以直接使用getuserinfo获取到的用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 0,\n   \"data\": {\n        \"list\": [\n                {\n               \"row\":1,\n               \"score\": 0,\n               \"user\": {\n                   \"id\": \"6fda624cb8954be3b90d721d24d69119\",\n                   \"name\": \"hoke\",\n                   \"headImg\":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'\n                   \"gender\": 1\n                   }\n               }\n               ],\n       //当前用户个人信息\n       \"my\": {\n           \"row\": \"5\",\n           \"score\": 0,\n           \"user\": {\n                \"id\": \"6fda624cb8954be3b90d721d24d69119\",\n                \"name\": \"hoke\",\n                \"gender\": 1,\n                \"headImg\":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'\n                }\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "ranking"
  },
  {
    "type": "function",
    "url": "getTeamRanking(param)",
    "title": "getTeamRanking",
    "name": "getTeamRanking",
    "group": "ranking",
    "description": "<p>获取群排行榜</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>请求的页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>每页的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"count\": 10,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "0": [
          {
            "group": "0",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "0",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>返回的值.</p>"
          },
          {
            "group": "0",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>返回一个对象数组 排名是数组的index顺序.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户的userid.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户的昵称.</p>"
          },
          {
            "group": "0",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>用户的性别（1 男 2 女）.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "headImg",
            "description": "<p>用户的头像地址</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "row",
            "description": "<p>用户的排名</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>当前用户的分数</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>当前用户的信息 当然你可以直接使用getuserinfo获取到的用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 0,\n   \"data\": {\n        \"list\": [\n                {\n               \"row\":1,\n               \"score\": 0,\n               \"user\": {\n                   \"id\": \"6fda624cb8954be3b90d721d24d69119\",\n                   \"name\": \"hoke\",\n                   \"headImg\":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'\n                   \"gender\": 1\n                   }\n               }\n               ],\n       //当前用户个人信息\n       \"my\": {\n           \"row\": \"5\",\n           \"score\": 0,\n           \"user\": {\n                \"id\": \"6fda624cb8954be3b90d721d24d69119\",\n                \"name\": \"hoke\",\n                \"gender\": 1,\n                \"headImg\":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'\n                }\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "ranking"
  },
  {
    "type": "function",
    "url": "getWorldRanking(param)",
    "title": "getWorldRanking",
    "name": "getWorldRanking",
    "group": "ranking",
    "description": "<p>获取世界排行榜</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>请求的页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>每页的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"count\": 10,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "0": [
          {
            "group": "0",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "0",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>返回的值.</p>"
          },
          {
            "group": "0",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>返回一个对象数组 排名是数组的index顺序.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户的userid.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户的昵称.</p>"
          },
          {
            "group": "0",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>用户的性别（1 男 2 女）.</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "headImg",
            "description": "<p>用户的头像地址</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "row",
            "description": "<p>用户的排名</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>当前用户的分数</p>"
          },
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>当前用户的信息 当然你可以直接使用getuserinfo获取到的用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 0,\n   \"data\": {\n        \"list\": [\n                {\n               \"row\":1,\n               \"score\": 0,\n               \"user\": {\n                   \"id\": \"6fda624cb8954be3b90d721d24d69119\",\n                   \"name\": \"hoke\",\n                   \"headImg\":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'\n                   \"gender\": 1\n                   }\n               }\n               ],\n       //当前用户个人信息\n       \"my\": {\n           \"row\": \"5\",\n           \"score\": 0,\n           \"user\": {\n                \"id\": \"6fda624cb8954be3b90d721d24d69119\",\n                \"name\": \"hoke\",\n                \"gender\": 1,\n                \"headImg\":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'\n                }\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "ranking"
  },
  {
    "type": "function",
    "url": "gameResetResurrection(param)",
    "title": "gameResetResurrection",
    "name": "gameResetResurrection",
    "group": "resurrection",
    "description": "<p>重置复活的次数,如果不重置那么消耗的茄子数将会以几何倍增加 无返回值</p>",
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "resurrection"
  },
  {
    "type": "function",
    "url": "gameResurrection(param)",
    "title": "gameResurrection",
    "name": "gameResurrection",
    "group": "resurrection",
    "description": "<p>复活</p>",
    "success": {
      "fields": {
        "0": [
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Firstname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 0 OK\n{\n  \"state\": \"0\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "resurrection"
  },
  {
    "type": "function",
    "url": "saveGameScore(param)",
    "title": "saveGameScore",
    "name": "saveGameScore",
    "group": "score",
    "description": "<p>保存游戏分数</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>最后得分</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"score\": 10,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "0": [
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 0 OK\n{\n  code:0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "10011": [
          {
            "group": "10011",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回的错误码</p>"
          },
          {
            "group": "10011",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>返回的错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": 10011,\n  \"err\": \"token is expired by 2271h36m3s\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "score"
  },
  {
    "type": "function",
    "url": "config(param)",
    "title": "login",
    "name": "config",
    "group": "user",
    "description": "<p>用户登陆接口 此方法必须调用 不然后续的接口将无法正常返回 当调用此方法后如果验证成功那么ready方法将会触发(为了安全建议加密过程放到服务器)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "debug",
            "description": "<p>开启调试模式,调用的所有api的返回值会在客户端alert出来(此参数输入前端配置 不需要加密))。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appid",
            "description": "<p>由真漫公司提供）。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>当前时间戳(秒)。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "norce",
            "description": "<p>uuid 唯一标识符。.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>加密数据由服务器提供。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"debug\":true,\n  \"appid\": qweroiuwoieusdfasdf,\n  \"timestamp\": 1570759818,\n  \"norce\": ncennffkjdiamlpmcbajkmaiiiddgioo,\n  \"sign\": asdfasdfasdfas2312sdf1-1231sdfsfdsf23123sdf123,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>登陆成功.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 0 OK\n{\n  res:\"成功\"//这里的res 是config().then(res=>{})里的res\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>DAWebViewJavascriptBridge is not defined.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 Not Found\n{\n  message: \"DAWebViewJavascriptBridge is not defined\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "user"
  },
  {
    "type": "function",
    "url": "error(param)",
    "title": "error",
    "name": "error",
    "group": "user",
    "description": "<p>config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。</p>",
    "success": {
      "fields": {
        "10011": [
          {
            "group": "10011",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回的错误码</p>"
          },
          {
            "group": "10011",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>返回的错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " OK\n{\n  \"code\": 10011,\n  \"err\": \"token is expired by 2271h36m3s\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "user"
  },
  {
    "type": "function",
    "url": "getUserInfo(param)",
    "title": "userInfo",
    "name": "getUserInfo",
    "group": "user",
    "description": "<p>获取用户的信息(此处返回的信息较多 这里只罗列了我们觉得游戏中需要的数据)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>年龄.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>昵称.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>性别（1 男 2女）.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "head_img",
            "description": "<p>头像.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>userid(用户唯一id).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 0 OK\n{\n  \"age\":12\n  \"name\": \"Wei\",\n  \"gender\": 1,\n  \"head_img\": \"https://img.tens.zhenmanapp.com/5d020208c6c5ee0001523439.headUrl\",\n  \"user\": \"cdcec225fcb747309a3f7ec038c000a0\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "10011": [
          {
            "group": "10011",
            "optional": false,
            "field": "code",
            "description": "<p>返回的错误码.</p>"
          },
          {
            "group": "10011",
            "optional": false,
            "field": "err",
            "description": "<p>返回的错误信息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 10011 Not Found\n{\n   \"code\": 10011,\n    \"err\": \"token is expired by 2271h36m3s\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "user"
  },
  {
    "type": "function",
    "url": "ready()",
    "title": "ready",
    "name": "ready",
    "group": "user",
    "description": "<p>config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。</p>",
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "user"
  },
  {
    "type": "function",
    "url": "request(param)",
    "title": "request",
    "name": "request",
    "group": "user",
    "description": "<p>request请求</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>请求地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>请求类型(post,get)。</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>请求参数.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"url\": http://www.baidu.com,\n  \"method\": \"GET\",\n  \"data\": {\n      name:'帅'    \n  },\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "0": [
          {
            "group": "0",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>由开发者自己规定.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 0 OK\n{\n  \"state\": \"0\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>由开发者自己规定.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "tenapi/tensApi.js",
    "groupTitle": "user"
  }
] });
