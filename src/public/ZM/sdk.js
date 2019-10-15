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
            error: function (res) {

            },
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
            getWorldRanking: function (page, count) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMRankingPlugin', 'getWorldRanking', {'page': page, 'count': count }, function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
            getTeamRanking: function (page, count) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMRankingPlugin', 'getTeamRanking', { 'page': page, 'count': count }, function (state, data) {
                        console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
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
            saveGameScore: function (score) {
                return new Promise((resolve, reject) => {
                    callhandler('ZIMRankingPlugin', 'saveGameScore', {'score': score }, function (state, data) {
                        // console.log('state', state, data);
                        if (state === 0) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    });
                })
            },
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
            currentScreenState:function(res){
            }
        },
            flag && (w.zmim = w.ZMIM = ZMIM),
            ZMIM
    });
