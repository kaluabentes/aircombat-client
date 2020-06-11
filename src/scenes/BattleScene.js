import Phaser from "phaser";

import Jet from "../objects/Jet";
import Ground from "../objects/Ground";
import Cloud from "../objects/Cloud";
import {
  WORLD_WIDTH,
  WORLD_HEIGHT,
  JET_WIDTH,
  JET_HEIGHT,
} from "../config/objects";
import { CLOUD_IMAGE } from "../config/textures";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BattleScene",
    });
  }

  create() {
    this.physics.world.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    this.ground = new Ground({
      scene: this,
      x: 0,
      y: 0,
      width: WORLD_WIDTH,
      height: WORLD_HEIGHT,
    });

    for (let i = 0; i < 300; i++) {
      let cloud = new Cloud({
        scene: this,
        x: 0,
        y: 0,
      });
      cloud.setX(Phaser.Math.Between(0, WORLD_WIDTH - cloud.width));
      cloud.setY(Phaser.Math.Between(0, WORLD_HEIGHT - cloud.height));
    }

    this.jet = new Jet({
      scene: this,
      x: Phaser.Math.Between(JET_WIDTH * 0.5, WORLD_WIDTH - JET_WIDTH * 0.5),
      y: Phaser.Math.Between(JET_HEIGHT * 0.5, WORLD_HEIGHT - JET_HEIGHT * 0.5),
    });

    // Add bounds mask to hide jet when hit bounds
    // createBoundsMask(this);
  }

  update() {
    const input = this.input.keyboard.createCursorKeys();

    this.jet.update(input);

    // Teleports the jet when reachs the bounds.
    this.physics.world.wrap(this.jet, 0);
  }
}
