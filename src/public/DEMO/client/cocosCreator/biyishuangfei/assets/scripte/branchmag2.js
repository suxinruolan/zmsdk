cc.Class({
    extends: cc.Component,
    properties: {
        branchpreL: {
            default: null,
            type: cc.Prefab
        },
        branchpreR: {
            default: null,
            type: cc.Prefab
        },
    },
    onLoad() {
        this.poolL = new cc.NodePool('branch');
        this.poolR = new cc.NodePool('branch');
        for (let i = 0; i < 100; i++) {
            this.poolL.put(cc.instantiate(this.branchpreL));
            this.poolR.put(cc.instantiate(this.branchpreR));
        }
    },

    start() {
        this.schedule(function () {
            if (!this.node.parent.getComponent('play').isGameOver && this.poolL.size() > 0 && this.poolR.size() > 0) {
                this.node.parent.getComponent('play').createBranch(this.node, this.poolL, this.poolR)
            }
        }, 0.5)
    },
    update(dt) {
        if (this.node.parent.getComponent('play').isGameOver) {
            this.node.parent.getComponent('play').offTouch(this.node)
        }
        if (!this.node.parent.getComponent('play').isGameOver) {
            this.node.parent.getComponent('play').touchStar(this.node)
        }
    },
});
