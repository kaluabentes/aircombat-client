import Phaser from "phaser";

import { CLOUD_IMAGE } from "../config/textures";

export default class Cloud extends Phaser.GameObjects.Image {
  constructor({ scene, x, y }) {
    super(scene, x, y, CLOUD_IMAGE);
    scene.add.existing(this);

    this.setOrigin(0, 0);
  }
}
