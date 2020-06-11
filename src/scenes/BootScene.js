import Phaser from "phaser";

import {
  makeAnimations,
  JET_MIN_SPEED,
  JET_MAX_SPEED,
} from "../helpers/animations";
import jetMinSpeedSprite from "../assets/images/jet-min-speed.png";
import jetMaxSpeedSprite from "../assets/images/jet-max-speed.png";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BootScene",
    });
  }

  preload() {
    const progress = this.add.graphics();

    this.load.on("progress", (value) => {
      progress.clear();
      progress.fillStyle(0xffffff, 1);
      progress.fillRect(
        0,
        this.sys.game.config.height / 2,
        this.sys.game.config.width * value,
        60
      );
    });

    this.load.on("complete", () => {
      makeAnimations(this);
      progress.destroy();
      this.scene.start("BattleScene");
    });

    this.load.spritesheet(JET_MIN_SPEED, jetMinSpeedSprite, {
      frameWidth: 245,
      frameHeight: 350,
    });

    this.load.spritesheet(JET_MAX_SPEED, jetMaxSpeedSprite, {
      frameWidth: 245,
      frameHeight: 388,
    });
  }
}
