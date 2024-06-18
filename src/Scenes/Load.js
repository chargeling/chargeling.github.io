class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");


        // Load characters spritesheet
        this.load.atlas("platformer_characters", "tilemap-characters-packed.png", "tilemap-characters-packed.json");

        // Load tilemap information
        this.load.image("tilemap_tiles", "platformerPack_industrial_tilesheet.png");
        this.load.tilemapTiledJSON("platformer-level-1", "platformer-level-1.tmj");  
        this.load.tilemapTiledJSON("platformer-level-2", "platformer-level-2.tmj"); 
        this.load.tilemapTiledJSON("platformer-level-3", "platformer-level-3.tmj"); 
        this.load.tilemapTiledJSON("platformer-level-4", "platformer-level-4.tmj"); 
        this.load.image("End", "End.png");
        this.load.image('background', 'IndBack.png')

        // Load the tilemap as a spritesheet
        this.load.spritesheet("tilemap_sheet", "platformerPack_industrial_tilesheet.png", {
            frameWidth: 18,
            frameHeight: 18
        });


        



        // Oooh, fancy. A multi atlas is a texture atlas which has the textures spread
        // across multiple png files, so as to keep their size small for use with
        // lower resource devices (like mobile phones).
        // kenny-particles.json internally has a list of the png files
        // The multiatlas was created using TexturePacker and the Kenny
        // Particle Pack asset pack.
        this.load.multiatlas("kenny-particles", "kenny-particles.json");
    }

    create() {
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('platformer_characters', {
                prefix: "tile_",
                start: 4,
                end: 5,
                suffix: ".png",
                zeroPad: 4
            }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0004.png" }
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0005.png" }
            ],
        });

         //pass to the next Scene
         this.scene.start("platformerScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}