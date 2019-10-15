cc.Class({
    extends: cc.Component,
    properties: {
    },
    onLoad() {},
    init(pool) {
        this.pool = pool;
    },
    start() {},
    update(dt) {
        let num = cc.find('Canvas').getComponent('play').score / 10 > 10 ? 10 : cc.find('Canvas').getComponent('play').score / 10;
   
        if (this.node.y < -this.node.height || cc.find('Canvas').getComponent('play').isGameOver){
            if (!cc.find('Canvas').getComponent('play').isGameOver) {
                    cc.find('Canvas').getComponent('play').score += 0.5;
                    cc.find('Canvas').getChildByName('score').getComponent(cc.Label).string = parseInt(cc.find('Canvas').getComponent('play').score);
            }
            this.pool.put(this.node);
        }
        this.node.y -= 5 + num;
    },
});
