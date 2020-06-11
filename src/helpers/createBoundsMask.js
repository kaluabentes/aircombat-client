import Phaser from "phaser";

import { WORLD_HEIGHT, WORLD_WIDTH } from "../config/objects";
import { OUTSIDE_COLOR } from "../config/game";

/**
 * Create mask to create effect of teleporting when hiting the bounds.
 * @param {Phaser.Scene} scene
 */
export default function createBoundsMask(scene) {
  scene.add
    .rectangle(-500, 0, 500, WORLD_HEIGHT, OUTSIDE_COLOR)
    .setOrigin(0, 0);

  scene.add
    .rectangle(WORLD_WIDTH, 0, 500, WORLD_HEIGHT, OUTSIDE_COLOR)
    .setOrigin(0, 0);

  scene.add.rectangle(0, -500, WORLD_WIDTH, 500, OUTSIDE_COLOR).setOrigin(0, 0);

  scene.add
    .rectangle(0, WORLD_HEIGHT, WORLD_WIDTH, 500, OUTSIDE_COLOR)
    .setOrigin(0, 0);

  scene.add.rectangle(-500, -500, 500, 500, OUTSIDE_COLOR).setOrigin(0, 0);

  scene.add
    .rectangle(WORLD_WIDTH, -500, 500, 500, OUTSIDE_COLOR)
    .setOrigin(0, 0);

  scene.add
    .rectangle(-500, WORLD_HEIGHT, 500, 500, OUTSIDE_COLOR)
    .setOrigin(0, 0);

  scene.add
    .rectangle(WORLD_WIDTH, WORLD_HEIGHT, 500, 500, OUTSIDE_COLOR)
    .setOrigin(0, 0);
}
