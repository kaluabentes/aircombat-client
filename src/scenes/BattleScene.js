import Phaser from "phaser";

import Jet from "../objects/Jet";
import BattleField from "../objects/BattleField";
import { WORLD_WIDTH, WORLD_HEIGHT } from "../config/settings";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BattleScene",
    });
  }

  create() {
    this.battleField = new BattleField({
      scene: this,
      x: 0,
      y: 0,
      width: WORLD_WIDTH,
      height: WORLD_HEIGHT,
    });

    this.jet = new Jet({
      scene: this,
      x: 0,
      y: 0,
      spawnRandomly: true,
    });

    // Add bounds mask to hide jet
    this.battleField.addBoundsMask();

    this.physics.world.setBounds(
      0,
      0,
      this.battleField.width,
      this.battleField.height
    );
  }

  update() {
    const input = this.input.keyboard.createCursorKeys();

    this.jet.update(input);

    // Teleports the jet when reachs the bounds.
    this.physics.world.wrap(this.jet, 0);
  }
}
