import Phaser from "phaser";

import Fighter from "../objects/Fighter";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BattleScene",
    });
  }

  create() {
    this.add.image(0, 0, "map").setOrigin(0, 0);

    this.add.existing(new Fighter(this, 0, 0));
  }
}
