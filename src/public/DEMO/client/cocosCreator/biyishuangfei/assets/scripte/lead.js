// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:
    /**
        * 进入碰撞
        * 当碰撞产生的时候调用
        * @param {collider} other 产生碰撞的另一个组件
        * @param {collider} self 产生碰撞的当前组件
        */
    onCollisionEnter: function (other, self) {
        // cc.log('me', self, 'other', other);
        cc.find('Canvas').getComponent('play').countDown();
        // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        // var world = self.world;
        // this.game.isGameover = true;
        // this.game.node.off('touchstart');
        // this.game.node.off('touchend');
        // this.game.pop.active = true;
        // this.game.pop.zIndex = 3;
    },
    onLoad() {
        this.speed = -1;
    },

    start() {
    },
    update(dt) {
        if (this.node.x >= 0 && this.node.x <= this.node.parent.width - this.node.width) {
            this.node.x += (10 + cc.find('Canvas').getComponent('play').score) * this.speed
        }
        if (this.node.x < 0) {
            this.node.x = 0;
        }
        if (this.node.x > this.node.parent.width - this.node.width) {
            this.node.x = this.node.parent.width - this.node.width;
        }
        if (cc.find('Canvas').getComponent('play').isGameOver) {
            this.node.x = 0;
            this.speed = -1;
        }
    },
});
