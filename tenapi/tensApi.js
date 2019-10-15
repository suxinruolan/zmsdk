/*
 * @Github: 我没有
 * @Author: 李鹏帅
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 * @since: 2019-10-11 08:56:18
 * @lastTime: 2019-10-11 16:53:05
 * @LastAuthor: Do not edit
 * @message: gamesdk
 */
// import 'http://www.asdf.com/DCJavaScriptBridge.js';
!
    function (a, b) {
        "function" == typeof define && (define.amd || define.cmd) ? define(function () {
            return b(a)
        }) : b(a, !0)
    }(window, function (w, flag) {

        function callhandler(asdf, name, data, callback) {
            DAWebViewJavascriptBridge.callHandler(asdf, name, data, callback);
            //    setupWebViewJavascriptBridge(function (bridge) {
            //            bridge.callHandler(asdf, name, data, callback)
            //    })
        }

        var ZMIM;
        ZMIM = {
            /**
            * @api {function} config(param) login 
            * @apiName config
            * @apiGroup user
            * @apiDescription 用户登陆接口 此方法必须调用 不然后续的接口将无法正常返回 当调用此方法后如果验证成功那么ready方法将会触发(为了安全建议加密过程放到服务器)
            *
            * @apiParam {Boolean} debug 开启调试模式,调用的所有api的返回值会在客户端alert出来(此参数输入前端配置 不需要加密))。
            * @apiParam {String} appid 由真漫公司提供）。
            * @apiParam {String} timestamp 当前时间戳(秒)。
            * @apiParam {String} norce uuid 唯一标识符。.
            * @apiParam {String} sign 加密数据由服务器提供。
            * @apiParamExample {json } Request-Example:
            *     {
            *       "debug":true,
            *       "appid": qweroiuwoieusdfasdf,
            *       "timestamp": 1570759818,
            *       "norce": ncennffkjdiamlpmcbajkmaiiiddgioo,
            *       "sign": asdfasdfasdfas2312sdf1-1231sdfsfdsf23123sdf123,
            *     }
            * @apiSuccess  {String} res 登陆成功.
            * @apiSuccessExample { json} Success-Response:
            *     HTTP/1.1 0 OK
            *     {
            *       res:"成功"//这里的res 是config().then(res=>{})里的res
            *     }
            * @apiError message DAWebViewJavascriptBridge is not defined.
            *
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 Not Found
            *     {
            *       message: "DAWebViewJavascriptBridge is not defined"
            *     }
            * @apiVersion 0.0.0
            */
            config: function (options) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMConfigPlugin', 'config', options, function (state, data) {
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} ready() ready
            * @apiName ready
            * @apiGroup user 
            * @apiDescription config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            *  @apiVersion 0.0.0
            */
            ready: function (callback) {
                if (w.DAWebViewJavascriptBridge) {
                    DAWebViewJavascriptBridge.init(function (message, responseCallback) {
                        var data = { 'Javascript Responds': 'Wee!' };
                        responseCallback(data);
                    });
                    callback();
                } else {
                    document.addEventListener('WebViewJavascriptBridgeReady', function () {
                        DAWebViewJavascriptBridge.init(function (message, responseCallback) {
                            var data = { 'Javascript Responds': 'Wee!' };
                            responseCallback(data);
                        });
                        callback();
                    }, false)
                }
            },

            /**
            * @api {function} error(param) error
            * @apiName error
            * @apiGroup user
            * @apiDescription config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            * @apiSuccess (10011) {Number} code 返回的错误码
            * @apiSuccess (10011){String} err 返回的错误信息
            * @apiSuccessExample { json} Success-Response:
            *      OK
            *     {
            *       "code": 10011,
            *       "err": "token is expired by 2271h36m3s"
            *     }
            *  @apiVersion 0.0.0
            */
            error: function (res) {

            },
            /**
            * @api {function} request(param) request
            * @apiName request
            * @apiGroup user
            * @apiDescription request请求
            *
            * @apiParam {String} url 请求地址
            * @apiParam {String} method 请求类型(post,get)。
            * @apiParam {json} data 请求参数.
            * @apiParamExample {json } Request-Example:
            *     {
            *       "url": http://www.baidu.com,
            *       "method": "GET",
            *       "data": {
            *           name:'帅'    
            *       },
            *     }
            * @apiSuccess (0) {String} data 由开发者自己规定.
            * @apiSuccessExample { json} Success-Response:
            *     HTTP/1.1 0 OK
            *     {
            *       "state": "0",
            *     }
            * @apiError UserNotFound 由开发者自己规定.
            *
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 404 Not Found
            *     {
            *       "error": "UserNotFound"
            *     }
            *  @apiVersion 0.0.0
            */
            request: function (url, method, data) {
                return new Promise((resolve, reject) => {
                    const dataJson = {}
                    dataJson.url = url;
                    dataJson.method = method;
                    dataJson.data = data;
                    callhandler('ZIMRequestPlugin', 'request', dataJson, function (state, data) {
                        cc.log('state', state);
                        cc.log('data', data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} getUserInfo(param) userInfo
            * @apiName getUserInfo
            * @apiGroup user
            * @apiDescription 获取用户的信息(此处返回的信息较多 这里只罗列了我们觉得游戏中需要的数据)
            *
            * @apiSuccess  {Number} age 年龄.
            * @apiSuccess  {String} name 昵称.
            * @apiSuccess  {Number} gender 性别（1 男 2女）.
            * @apiSuccess  {String} head_img 头像.
            * @apiSuccess  {String} user userid(用户唯一id).
            * @apiSuccessExample { json} Success-Response:
            *     HTTP/1.1 0 OK
            *     {
            *       "age":12
            *       "name": "Wei",
            *       "gender": 1,
            *       "head_img": "https://img.tens.zhenmanapp.com/5d020208c6c5ee0001523439.headUrl",
            *       "user": "cdcec225fcb747309a3f7ec038c000a0",
            *     }
            * @apiError (10011) code 返回的错误码.
            * @apiError (10011) err 返回的错误信息.
            *
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 10011 Not Found
            *     {
            *        "code": 10011,
            *         "err": "token is expired by 2271h36m3s"
            *     }
            *  @apiVersion 0.0.0
            */
            getUserInfo: function () {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMUserInfoPlugin', 'getUserInfo', function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} showShareAlert() showShareAlert
            * @apiName showShareAlert
            * @apiGroup mobile
            * @apiDescription 分享弹窗 这里知识给了一个弹窗消失的回调 并不能够判断当前用户是否真正的分享了链接
            *  @apiVersion 0.0.0
            */
            showShareAlert: function () {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMShareAlertPlugin', 'showShareAlertView', function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
             * @api {function} gameResurrection(param) gameResurrection
             * @apiName gameResurrection
             * @apiGroup resurrection
             * @apiDescription 复活
             *
             * @apiSuccess (0) {String} state Firstname of the User.
             * @apiSuccessExample { json} Success-Response:
             *     HTTP/1.1 0 OK
             *     {
             *       "state": "0",
             *     }
             * @apiError UserNotFound The id of the User was not found.
             *
             * @apiErrorExample Error-Response:
             *     HTTP/1.1 404 Not Found
             *     {
             *       "error": "UserNotFound"
             *     }
             *  @apiVersion 0.0.0
             */
            gameResurrection: function (id) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMGoldPlugin', 'gameResurrection', { 'id': id }, function (state, data) {
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} gameResetResurrection(param) gameResetResurrection
            * @apiName gameResetResurrection
            * @apiGroup resurrection
            * @apiDescription 重置复活的次数,如果不重置那么消耗的茄子数将会以几何倍增加 无返回值
            *  @apiVersion 0.0.0
            */
            gameResetResurrection: function () {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMGoldPlugin', 'gameResetResurrection', function (state, data) {
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} getWorldRanking(param) getWorldRanking
            * @apiName getWorldRanking
            * @apiGroup ranking
            * @apiDescription 获取世界排行榜
            *
            * @apiParam {Number} page 请求的页码
            * @apiParam {Number} count 每页的数据。
            * @apiParamExample {json } Request-Example:
            *     {
            *       "page": 1,
            *       "count": 10,
            *     }
            * @apiSuccess (0) {Number} code 状态码.
            * @apiSuccess (0) {json} data 返回的值.
            * @apiSuccess (0) {array} list 返回一个对象数组 排名是数组的index顺序.
            * @apiSuccess (0) {String} id 用户的userid.
            * @apiSuccess (0) {String} name 用户的昵称.
            * @apiSuccess (0) {Number} gender 用户的性别（1 男 2 女）.
            * @apiSuccess (0) {String} headImg 用户的头像地址
            * @apiSuccess (0) {String} row 用户的排名
            * @apiSuccess (0) {String} score 当前用户的分数
            * @apiSuccess (0) {String} user 当前用户的信息 当然你可以直接使用getuserinfo获取到的用户信息
            * @apiSuccessExample { json} Success-Response:
            *        {
            *           "code": 0,
            *           "data": {
            *                "list": [
            *                        {
            *                       "row":1,
            *                       "score": 0,
            *                       "user": {
            *                           "id": "6fda624cb8954be3b90d721d24d69119",
            *                           "name": "hoke",
            *                           "headImg":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'
            *                           "gender": 1
            *                           }
            *                       }
            *                       ],
            *               //当前用户个人信息
            *               "my": {
            *                   "row": "5",
            *                   "score": 0,
            *                   "user": {
            *                        "id": "6fda624cb8954be3b90d721d24d69119",
            *                        "name": "hoke",
            *                        "gender": 1,
            *                        "headImg":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'
            *                        }
            *                   }
            *               }
            *           }
            * @apiError UserNotFound The id of the User was not found.
            *
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 404 Not Found
            *     {
            *       "error": "UserNotFound"
            *     }
            *  @apiVersion 0.0.0
            */
            getWorldRanking: function (page, count) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMRankingPlugin', 'getWorldRanking', { 'page': page, 'count': count }, function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} getTeamRanking(param) getTeamRanking
            * @apiName getTeamRanking
            * @apiGroup ranking
            * @apiDescription 获取群排行榜
            *
            * @apiParam {Number} page 请求的页码
            * @apiParam {Number} count 每页的数据。
            * @apiParamExample {json } Request-Example:
            *     {
            *       "page": 1,
            *       "count": 10,
            *     }
            * @apiSuccess (0) {Number} code 状态码.
            * @apiSuccess (0) {json} data 返回的值.
            * @apiSuccess (0) {array} list 返回一个对象数组 排名是数组的index顺序.
            * @apiSuccess (0) {String} id 用户的userid.
            * @apiSuccess (0) {String} name 用户的昵称.
            * @apiSuccess (0) {Number} gender 用户的性别（1 男 2 女）.
            * @apiSuccess (0) {String} headImg 用户的头像地址
            * @apiSuccess (0) {String} row 用户的排名
            * @apiSuccess (0) {String} score 当前用户的分数
            * @apiSuccess (0) {String} user 当前用户的信息 当然你可以直接使用getuserinfo获取到的用户信息
            * @apiSuccessExample { json} Success-Response:
            *        {
            *           "code": 0,
            *           "data": {
            *                "list": [
            *                        {
            *                       "row":1,
            *                       "score": 0,
            *                       "user": {
            *                           "id": "6fda624cb8954be3b90d721d24d69119",
            *                           "name": "hoke",
            *                           "headImg":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'
            *                           "gender": 1
            *                           }
            *                       }
            *                       ],
            *               //当前用户个人信息
            *               "my": {
            *                   "row": "5",
            *                   "score": 0,
            *                   "user": {
            *                        "id": "6fda624cb8954be3b90d721d24d69119",
            *                        "name": "hoke",
            *                        "gender": 1,
            *                        "headImg":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'
            *                        }
            *                   }
            *               }
            *           }
            * @apiError UserNotFound The id of the User was not found.
            *
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 404 Not Found
            *     {
            *       "error": "UserNotFound"
            *     }
            *  @apiVersion 0.0.0
            */
            getTeamRanking: function (page, count) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMRankingPlugin', 'getTeamRanking', { 'page': page, 'count': count }, function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} getFriendRanking(param) getFriendRanking
            * @apiName getFriendRanking
            * @apiGroup ranking
            * @apiDescription 获取好友排行榜
            *
            * @apiParam {Number} page 请求的页码
            * @apiParam {Number} count 每页的数据。
            * @apiParamExample {json } Request-Example:
            *     {
            *       "page": 1,
            *       "count": 10,
            *     }
            * @apiSuccess (0) {Number} code 状态码.
            * @apiSuccess (0) {json} data 返回的值.
            * @apiSuccess (0) {array} list 返回一个对象数组 排名是数组的index顺序.
            * @apiSuccess (0) {String} id 用户的userid.
            * @apiSuccess (0) {String} name 用户的昵称.
            * @apiSuccess (0) {Number} gender 用户的性别（1 男 2 女）.
            * @apiSuccess (0) {String} headImg 用户的头像地址
            * @apiSuccess (0) {String} row 用户的排名
            * @apiSuccess (0) {String} score 当前用户的分数
            * @apiSuccess (0) {String} user 当前用户的信息 当然你可以直接使用getuserinfo获取到的用户信息
            * @apiSuccessExample { json} Success-Response:
            *        {
            *           "code": 0,
            *           "data": {
            *                "list": [
            *                        {
            *                       "row":1,
            *                       "score": 0,
            *                       "user": {
            *                           "id": "6fda624cb8954be3b90d721d24d69119",
            *                           "name": "hoke",
            *                           "headImg":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'
            *                           "gender": 1
            *                           }
            *                       }
            *                       ],
            *               //当前用户个人信息
            *               "my": {
            *                   "row": "5",
            *                   "score": 0,
            *                   "user": {
            *                        "id": "6fda624cb8954be3b90d721d24d69119",
            *                        "name": "hoke",
            *                        "gender": 1,
            *                        "headImg":'http://c.hiphotos.baidu.com/image/h%3D300/sign=0cc74ef9a3773912db268361c8188675/9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg'
            *                        }
            *                   }
            *               }
            *           }
            * @apiError UserNotFound The id of the User was not found.
            *
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 404 Not Found
            *     {
            *       "error": "UserNotFound"
            *     }
            *  @apiVersion 0.0.0
            */
            getFriendRanking: function (page, count) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMRankingPlugin', 'getFriendRanking', { 'page': page, 'count': count }, function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} saveGameScore(param) saveGameScore
            * @apiName saveGameScore
            * @apiGroup score
            * @apiDescription 保存游戏分数
            *
            * @apiParam {Number} score 最后得分
            * @apiParamExample {json } Request-Example:
            *     {
            *       "score": 10,
            *     }
            * @apiSuccess (0) {String} firstname Firstname of the User.
            * @apiSuccessExample { json} Success-Response:
            *     HTTP/1.1 0 OK
            *     {
            *       code:0
            *     }
            * @apiError  (10011) {Number} code 返回的错误码
            * @apiError  (10011){String} err 返回的错误信息
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 404 Not Found
            *     {
            *       "code": 10011,
            *       "err": "token is expired by 2271h36m3s"
            *     }
            *  @apiVersion 0.0.0
            */
            saveGameScore: function (score) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMRankingPlugin', 'saveGameScore', { 'score': score }, function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} showTips(param) showTips
            * @apiName showTips
            * @apiGroup mobile
            * @apiDescription app的弹窗事件 如果不做任何操作他会在2秒后自动关闭(就相当于做了cancle 操作)
            *
            * @apiParam {String} message 文本描述
            * @apiParamExample {json } Request-Example:
            *     '帅'
            * @apiError UserNotFound The id of the User was not found.
            *
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 404 Not Found
            *     {
            *       "error": "UserNotFound"
            *     }
            *  @apiVersion 0.0.0
            */
            showTips: function (message) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMShareAlertPlugin', 'showTips', { 'message': message }, function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
          * @api {function} showJOJOAlert(param) showJOJOAlert
          * @apiName showJOJOAlert
          * @apiGroup mobile
          * @apiDescription app的弹窗事件 带确定按钮
          *
          * @apiParam {String} message 文本描述
          * @apiParamExample {String } Request-Example:
          *     '帅'
          * @apiError UserNotFound The id of the User was not found.
          *
          * @apiErrorExample Error-Response:
          *     HTTP/1.1 404 Not Found
          *     {
          *       "error": "UserNotFound"
          *     }
          *  @apiVersion 0.0.0
          */
            showJOJOAlert: function (message) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMShareAlertPlugin', 'showJOJOAlert', { 'message': message }, function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            /**
            * @api {function} currentScreenState(param) currentScreenState——存在bug
            * @apiName currentScreenState
            * @apiGroup mobile
            * @apiDescription tabel切换  state=yes no
            * @apiSuccess (-) {String} state yes标识当游戏页面 no表示其他页面.
            * @apiSuccessExample { json} Success-Response:
            *     HTTP/1.1 0 OK
            *     {
            *        state:'yes'
            *     }
            * @apiError UserNotFound The id of the User was not found.
            *
            * @apiErrorExample Error-Response:
            *     HTTP/1.1 404 Not Found
            *     {
            *       "error": "UserNotFound"
            *     }
            *  @apiVersion 0.0.0
            */
            currentScreenState: function (res) {
            }
        },
            flag && (w.zmim = w.ZMIM = ZMIM),
            ZMIM
    });
