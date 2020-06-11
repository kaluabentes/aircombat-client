import Phaser from "phaser";

import { OUTSIDE_COLOR } from "../config/game";

const GROUND_COLOR = 0x4cbddd;

export default class World extends Phaser.GameObjects.Rectangle {
  constructor({ scene, x, y, height, width }) {
    super(scene, x, y, height, width, GROUND_COLOR);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setOrigin(0, 0);
  }

  create() {
    for (let i; i < 100; i++) {
      this.scene.add.image();
    }
  }

  addBoundsMask() {
    this.scene.add
      .rectangle(-500, 0, 500, this.height, OUTSIDE_COLOR)
      .setOrigin(0, 0);

    this.scene.add
      .rectangle(this.width, 0, 500, this.height, OUTSIDE_COLOR)
      .setOrigin(0, 0);

    this.scene.add
      .rectangle(0, -500, this.width, 500, OUTSIDE_COLOR)
      .setOrigin(0, 0);

    this.scene.add
      .rectangle(0, this.height, this.width, 500, OUTSIDE_COLOR)
      .setOrigin(0, 0);

    this.scene.add
      .rectangle(-500, -500, 500, 500, OUTSIDE_COLOR)
      .setOrigin(0, 0);

    this.scene.add
      .rectangle(this.width, -500, 500, 500, OUTSIDE_COLOR)
      .setOrigin(0, 0);

    this.scene.add
      .rectangle(-500, this.height, 500, 500, OUTSIDE_COLOR)
      .setOrigin(0, 0);

    this.scene.add
      .rectangle(this.width, this.height, 500, 500, OUTSIDE_COLOR)
      .setOrigin(0, 0);
  }
}
