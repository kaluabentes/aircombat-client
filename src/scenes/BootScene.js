import Phaser from "phaser";

import makeAnimations from "../helpers/makeAnimations";
import battleFieldImage from "../assets/images/battle-field.png";
import fighterImage from "../assets/images/fighter.png";

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

    this.load.image("battleField", battleFieldImage);

    this.load.spritesheet("fighter", fighterImage, {
      frameWidth: 245,
      frameHeight: 350,
    });
  }
}
