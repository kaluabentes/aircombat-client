import Phaser from "phaser";

import mapImage from "../assets/images/map.png";
import fighterImage from "../assets/images/fighter.png";

const MAP_KEY = "map";
const FIGHTER_KEY = "fighter";
const FIGHTER_NORMAL_VELOCITY = "normalVelocity";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super("battle-scene");
  }

  preload() {
    this.load.image(MAP_KEY, mapImage);
    this.load.spritesheet(FIGHTER_KEY, fighterImage, {
      frameWidth: 245,
      frameHeight: 350,
    });
  }

  create() {
    this.cameras.main.setRoundPixels(true);

    this.add.image(0, 0, MAP_KEY).setOrigin(0, 0);

    this.anims.create({
      key: FIGHTER_NORMAL_VELOCITY,
      repeat: -1,
      frameRate: 60,
      frames: this.anims.generateFrameNumbers(FIGHTER_KEY, {
        start: 0,
        end: 2,
      }),
    });

    this.add
      .sprite(
        this.cameras.main.centerX - 245 * 0.5,
        this.cameras.main.height - 350 - 30,
        FIGHTER_KEY,
        0
      )
      .setOrigin(0, 0)
      .play(FIGHTER_NORMAL_VELOCITY);
  }
}
