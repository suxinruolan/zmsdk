var api = require('./data.js');
cc.Class({
    extends: cc.Component,
    properties: {
        ranking: {
            default: null,
            type: cc.Prefab
        },
    },
    onLoad() {
        //loading client android sdk
        let self = this
        ZMIM.request('/login').then((res) => {
            console.log('login', res)
            if (res.state == 0) {
                ZMIM.config(res.data).then((config) => {
                    ZMIM.showTips('config');
                }).catch(err => {
                    window.location.replace("https://dev.imapi.zhenmanapp.com/static/html/ivcode.html?code=#/")
                })
            } else {
                ZMIM.showTips('请检查您的网络');
            }
        }).catch(() => {
            window.location.replace("https://dev.imapi.zhenmanapp.com/static/html/ivcode.html?code=#/")
        })
        ZMIM.ready(() => {
            self.getLocalUserInfo()
            ZMIM.showJOJOAlert('ready 页面初始化成功').then((res) => {
                console.log('点接确定', res)
            })
        })
        this.isGameOver = true;
        cc.director.getCollisionManager().enabled = true;
    },
    getLocalUserInfo() {
        let self = this
        ZMIM.getUserInfo().then((res) => {
            if (res.lpsNoApp != undefined) {
                self.node.getChildByName('WebView').active = true;
            } else {
                api.data.userInfo = res;
            }
        })
    },
    /**
     * begin creat tree branch
     * @param {*} node region node
     * @param {*} poolL left object pool
     * @param {*} poolR right object pool
     */
    createBranch(node, poolL, poolR) {
        //i 0:left 1:right
        let i = Math.floor(Math.random() * 2);
        let width = 50 + Math.floor(Math.random() * (cc.winSize.width / 2 - 50));
        let newBranch = null;
        let x = 0;
        if (i == 1) {
            newBranch = poolR.get();
            newBranch.getComponent('branch').init(poolR);
            x = node.width;

        } else {
            newBranch = poolL.get();
            newBranch.getComponent('branch').init(poolL);
        }
        newBranch.width = (width > cc.winSize.width / 2 - 50 ? cc.winSize.width / 2 - 50 : width);

        let collider = newBranch.getComponent(cc.BoxCollider);
        collider.size.width = newBranch.width;
        collider.size.height = newBranch.height;
        if (i == 1) {
            collider.offset = cc.v2(-newBranch.width / 2, newBranch.height / 2);
        } else {
            collider.offset = cc.v2(newBranch.width / 2, newBranch.height / 2);
        }
        newBranch.x = x;
        newBranch.y = cc.winSize.height + cc.winSize.height / 2 * Math.random() + 30;
        if (node.childrenCount > 1) {
            newBranch.y = node.children[node.childrenCount - 1].y + newBranch.height + cc.winSize.height / 4 + Math.random() * (200 - this.score);
        }
        newBranch.zIndex = 1;
        node.addChild(newBranch);
    },
    /**
     * star the touch event
     * @param node child node 
     */
    touchStar(node) {
        let lead = node.getChildByName("lead");
        node.on('touchstart', function () {
            // cc.log(lead.getComponent('lead').speed);
            lead.getComponent('lead').speed = 1
        }, node, true);
        node.on('touchend', function () {
            lead.getComponent('lead').speed = -1
        }, node, true);
        node.on('touchcancel', function () {
            lead.getComponent('lead').speed = -1
        }, node, true);
    },
    /**
     * End the touch event
     */
    offTouch(node) {
        let lead = node.getChildByName("lead");
        node.off('touchstart');
        node.off('touchend');
    },
    /**
   * count down
   */
    countDown() {
        let time = 5;
        let self = this
        self.isGameOver = true;
        self.node.getChildByName('countDown').active = true;
        self.node.getChildByName('countDown').getChildByName('hint').getComponent(cc.Label).string = '是否消耗茄子复活？';
        self.node.getChildByName('countDown').getChildByName('time').getComponent(cc.Label).string = time;
        let interval = function () {
            cc.log(time);
            if (time == 0) {
                clearInterval(self.timmer);
                self.timmer = null;
                self.gameover()
            } else {
                time -= 1;
                self.node.getChildByName('countDown').getChildByName('time').getComponent(cc.Label).string = time;
            }
        }
        if (!CC_EDITOR) {
            self.timmer = setInterval(interval, 1000);
        }
    },
    /**
     * The lives
     */
    keepOn() {
        clearInterval(this.timmer);
        let self = this;
        self.timmer = null;
        self.node.getChildByName('countDown').active = false;
        ZMIM.gameResurrection().then((res) => {
            cc.log('续命回调', res);
            if (res.code == 0) {
                if (res.data == 0) {
                    cc.log('续命成功');
                    self.isGameOver = false;
                } else {
                    ZMIM.gameResetResurrection();
                    // console.log('茄子不够了');
                    // self.gameover();
                    self.node.getChildByName('pop').active = true;
                }
            }
        }).catch((err) => {
            console.log('err', err);
        });
    },
    /**
     * share
     */
    showShareAlert() {
        let self = this;
        self.node.getChildByName('pop').active = false;
        ZMIM.showShareAlert().then((res) => {
            self.gameover();
        })
    },
    /**
     * start game
     */
    gameStart() {
        this.isGameOver = false;
        this.score = 0;
        this.node.getChildByName('score').getComponent(cc.Label).string = this.score;
        this.node.getChildByName('index').active = false;
    },
    /**
     * game over
     */
    gameover() {
        if (this.timmer) {
            clearInterval(this.timmer);
            this.timmer = null;
        }
        this.node.getChildByName('pop').active = false;
        ZMIM.gameResetResurrection();
        ZMIM.saveGameScore(parseInt(this.score));
        this.node.getChildByName('countDown').active = false;
        this.node.getChildByName('index').active = true;
        this.node.getChildByName('index').getChildByName('score').getComponent(cc.Label).string = this.node.getChildByName('score').getComponent(cc.Label).string;
    },
    /**
     * open ranking 
     */
    openRank() {
        cc.log('node', this.node.children);
        this.node.getChildByName('rankinglist').active = true;
    },
    /**
     * close ranking 
     */
    closeRank() {
        this.node.getChildByName('rankinglist').active = false;
    },
    start() {
        //instantiate ranking
        this.node.addChild(cc.instantiate(this.ranking));
    },
    update(dt) {
    },
});


