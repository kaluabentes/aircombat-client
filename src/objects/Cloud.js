import Phaser from "phaser";

import { CLOUD_KEY } from "../config/keys";

export default class Cloud extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, CLOUD_KEY);
    scene.add.existing(this);

    this.setOrigin(0, 0);
  }
}
