import Phaser from "phaser";

import createAnimations from "../helpers/createAnimations";
import jetSprite from "../assets/images/jet.png";
import explosionSprite from "../assets/images/explosion.png";
import cloudImage from "../assets/images/cloud.png";
import bulletImage from "../assets/images/bullet.png";
import { JET_KEY, CLOUD_KEY, BULLET_KEY, EXPLOSION_KEY } from "../config/keys";
import { JET_HEIGHT, JET_WIDTH } from "../objects/Jet";

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
      this.scene.start("HudScene");
    });

    this.load.spritesheet(JET_KEY, jetSprite, {
      frameWidth: JET_WIDTH,
      frameHeight: JET_HEIGHT,
    });

    this.load.spritesheet(EXPLOSION_KEY, explosionSprite, {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.image(CLOUD_KEY, cloudImage);
    this.load.image(BULLET_KEY, bulletImage);
  }
}
