import Phaser from "phaser";

import makeAnimations from "../helpers/makeAnimations";
import jetSprite from "../assets/images/jet.png";
import cloudImage from "../assets/images/cloud.png";
import { JET_SPRITE, CLOUD_IMAGE } from "../config/textures";

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
      makeAnimations(this);
      this.scene.start("BattleScene");
    });

    this.load.spritesheet(JET_SPRITE, jetSprite, {
      frameWidth: 245,
      frameHeight: 350,
    });

    this.load.image(CLOUD_IMAGE, cloudImage);
  }
}
