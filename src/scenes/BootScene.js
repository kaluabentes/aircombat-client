import Phaser from "phaser";

import createAnimations from "../helpers/createAnimations";
import jetSprite from "../assets/images/jet.png";
import cloudImage from "../assets/images/cloud.png";
import { JET_SPRITE, CLOUD_IMAGE } from "../config/textures";
import { JET_HEIGHT, JET_WIDTH } from "../config/objects";

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
      progress.destroy();
      createAnimations(this);
      this.scene.start("BattleScene");
    });

    this.load.spritesheet(JET_SPRITE, jetSprite, {
      frameWidth: JET_WIDTH,
      frameHeight: JET_HEIGHT,
    });

    this.load.image(CLOUD_IMAGE, cloudImage);
  }
}
