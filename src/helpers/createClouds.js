import Phaser from "phaser";

import Cloud from "../objects/Cloud";
import { WORLD_HEIGHT, WORLD_WIDTH } from "../config/game";

export default function createClouds(scene, quantity) {
  for (let i = 0; i < quantity; i++) {
    let cloud = new Cloud(scene, 0, 0);
    cloud.setX(Phaser.Math.Between(0, WORLD_WIDTH - cloud.width));
    cloud.setY(Phaser.Math.Between(0, WORLD_HEIGHT - cloud.height));
    cloud.setAngle(Phaser.Math.Between(0, 360));
  }
}
