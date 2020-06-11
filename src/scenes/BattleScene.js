import Phaser from "phaser";

import Jet from "../objects/Jet";
import World from "../objects/World";
import {
  WORLD_WIDTH,
  WORLD_HEIGHT,
  JET_WIDTH,
  JET_HEIGHT,
} from "../config/objects";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BattleScene",
    });
  }

  create() {
    this.physics.world.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    this.world = new World({
      scene: this,
      x: 0,
      y: 0,
      width: WORLD_WIDTH,
      height: WORLD_HEIGHT,
    });

    this.jet = new Jet({
      scene: this,
      x: Phaser.Math.Between(JET_WIDTH * 0.5, WORLD_WIDTH - JET_WIDTH * 0.5),
      y: Phaser.Math.Between(JET_HEIGHT * 0.5, WORLD_HEIGHT - JET_HEIGHT * 0.5),
    });

    // Add bounds mask to hide jet when hit bounds
    this.world.addBoundsMask();
  }

  update() {
    const input = this.input.keyboard.createCursorKeys();

    this.jet.update(input);

    // Teleports the jet when reachs the bounds.
    this.physics.world.wrap(this.jet, 0);
  }
}
