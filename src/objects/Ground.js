import Phaser from "phaser";

import { OUTSIDE_COLOR } from "../config/game";
import { CLOUD_IMAGE } from "../config/textures";

const GROUND_COLOR = 0x4cbddd;

export default class Ground extends Phaser.GameObjects.Rectangle {
  constructor({ scene, x, y, height, width }) {
    super(scene, x, y, height, width, GROUND_COLOR);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setOrigin(0, 0);
  }
}
