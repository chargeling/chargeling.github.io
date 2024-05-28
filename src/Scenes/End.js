class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }


    create() {
        this.End = this.add.sprite(700, 400, "End");
        this.pKey = this.input.keyboard.addKey('P');
    }


    update() {
        if(Phaser.Input.Keyboard.JustDown(this.pKey)) {
            //pass to the game Scene
            this.scene.start("platformerScene");
        }
    }
}