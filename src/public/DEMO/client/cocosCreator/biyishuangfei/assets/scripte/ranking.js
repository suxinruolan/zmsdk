var api = require('./data.js');
var req = false;
cc.Class({
    extends: cc.Component,

    properties: {
        title: {
            default: null,
            type: cc.Node
        },
        content: {
            default: null,
            type: cc.Node
        },
        rowPre: {
            default: null,
            type: cc.Prefab
        },
        showType: '',
    },
    onLoad() {
        this.showType = 'friend';
        this.rowPool = new cc.NodePool();
        for (let i = 0; i < 1; i++) {
            let newRow = cc.instantiate(this.rowPre);
            this.rowPool.put(newRow);
        }
    },

    start() {
    },
    // Modify the current leaderboard list
    updateList(err, type) {
        //Clear the original data
        api.data.page = 1;
        this.recycle();
        this.content.removeAllChildren()
        this.content.destroyAllChildren()
        this.showType = type;
        this.title.getChildByName('friend').color = (type == 'friend' ? cc.Color.RED : cc.Color.WHITE);
        this.title.getChildByName('team').color = (type == 'team' ? cc.Color.RED : cc.Color.WHITE);
        this.title.getChildByName('world').color = (type == 'world' ? cc.Color.RED : cc.Color.WHITE);
        if (!req) {
            req = true;
            this.getList();
        }
    },
    /**
     * creat template rank row
     *@param rank 排名
     *@param name 姓名
     *@param score 分数
     */
    creatRow(rank, name, score) {
        let newRow
        if (this.rowPool.size() > 0) {
            newRow = this.rowPool.get();
        } else {
            newRow = cc.instantiate(this.rowPre);
        }
        newRow.getChildByName('rank').getComponent(cc.Label).string = rank;
        newRow.getChildByName('name').getComponent(cc.Label).string = name;
        newRow.getChildByName('score').getComponent(cc.Label).string = score;
        this.content.addChild(newRow);
    },
    /**
     * Modify your own information
     *@param rank 排名
     *@param name 姓名
     *@param score 分数
     */
    updataMy(rank, name, score) {
        this.node.getChildByName('my').getChildByName('rank').getComponent(cc.Label).string = rank;
        this.node.getChildByName('my').getChildByName('name').getComponent(cc.Label).string = name;
        this.node.getChildByName('my').getChildByName('score').getComponent(cc.Label).string = score;
        req = false;
    },
    /**
     * get ranking list
     */
    getList() {
        console.log('获取列表', this.showType, api.data.page);
        api.data.page = 1;
        this.count = 7;
        this.node.getChildByName("list").on("bounce-bottom", this.getCharts, this);
        // this.node.getChildByName("list").off("bounce-bottom");
        if (this.showType == 'world') {
            ZMIM.getWorldRanking(api.data.page, 7).then((res) => {
                this.addRankingOnly(res);
            }, this)
        }
        if (this.showType == 'team') {
            ZMIM.getTeamRanking(api.data.page, 7).then((res) => {
                this.addRankingOnly(res);
            }, this)
        }
        if (this.showType == 'friend') {
            ZMIM.getFriendRanking(api.data.page, 7).then((res) => {
                this.addRankingOnly(res);
            }, this)
        }
    },
    addRankingOnly(res) {
        if (res.code == 0) {
            ZMIM.showTips(this.showType+' success')
            res = res.data
            for (let i = 0; i < res.list.length; i++) {
                this.creatRow(i + 1, res.list[i].user.name, res.list[i].score)
            }
            cc.find('Canvas').getChildByName('rankinglist').getChildByName('list').getComponent(cc.ScrollView).scrollToTop();
            this.updataMy(res.my.row, api.data.userInfo.name, res.my.score);
        }
    },
    getCharts() {
        api.data.page = api.data.page + 1
        if (this.showType == 'world') {
            ZMIM.getWorldRanking(api.data.page, 7).then((res) => {
                this.addRanking(res);
            })
        }
        if (this.showType == 'team') {
            ZMIM.getTeamRanking(api.data.page, 7).then((res) => {
                this.addRanking(res);
            })
        }
        if (this.showType == 'friend') {
            ZMIM.getFriendRanking(api.data.page, 7).then((res) => {
                this.addRanking(res);
            }, this)
        }
    },
    addRanking(res) {
        if (res.code == 0) {
            cc.log(this.showType + ' ranking success')
            res = res.data
            if (res.list.length > 0) {
                this.count = 7 + this.list.length;
                for (let i = 0; i < res.list.length; i++) {
                    self.creatRow(this.count + i, res.list[i].user.name, res.list[i].score)
                }
                cc.find('Canvas/rankinglist').getComponent(cc.ScrollView).scrollToTop();
            }
        }
    },
    /**
     * Execute the current logic when the page is displayed
     */
    onEnable() {
        api.data.page = 1;
        this.updateList('', 'friend');
    },
    /**
     * Recovery of the item
     */
    recycle() {
        while (this.content.childrenCount > 0) {
            this.rowPool.put(this.content.getChildByName('row'))
        }
    },
    /**
     * Executes the current logic when the page disappears
     */
    onDisable() {
        api.data.page = 1;
        this.recycle();
        this.content.removeAllChildren()
        this.content.destroyAllChildren()

    },
    closeNode() {
        this.node.parent.getComponent('play').closeRank();
    },
    // update (dt) {},
});
