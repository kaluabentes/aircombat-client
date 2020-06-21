import Phaser from "phaser";

import { GROUND_COLOR } from "../config/game";

export default class Ground extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, height, width) {
    super(scene, x, y, height, width, GROUND_COLOR);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setOrigin(0, 0);
  }
}
