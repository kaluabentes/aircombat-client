import Phaser from "phaser";

import Fighter from "../objects/Fighter";
import BattleField from "../objects/BattleField";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BattleScene",
    });
  }

  create() {
    this.battleField = new BattleField({ scene: this, x: 0, y: 0 });
    this.fighter = new Fighter({ scene: this, x: 0, y: 0 });

    this.add.existing(this.battleField);
    this.add.existing(this.fighter);
  }

  update() {
    const input = this.input.keyboard.createCursorKeys();
    this.fighter.update(input);
  }
}
