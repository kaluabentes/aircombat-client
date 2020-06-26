import Phaser from "phaser";

import { WORLD_HEIGHT, WORLD_WIDTH } from "../config/game";
import { OUTSIDE_COLOR } from "../config/game";
import { BOUND_MASK } from "../config/depths";

/**
 * Create mask to create effect of teleporting when hiting the bounds.
 * @param {Phaser.Scene} scene
 */
export default function createBoundsMask(scene) {
  scene.add
    .rectangle(-1500, 0, 1500, WORLD_HEIGHT, OUTSIDE_COLOR)
    .setOrigin(0, 0)
    .setDepth(BOUND_MASK);

  scene.add
    .rectangle(WORLD_WIDTH, 0, 1500, WORLD_HEIGHT, OUTSIDE_COLOR)
    .setOrigin(0, 0)
    .setDepth(BOUND_MASK);

  scene.add
    .rectangle(0, -1500, WORLD_WIDTH, 1500, OUTSIDE_COLOR)
    .setOrigin(0, 0)
    .setDepth(BOUND_MASK);

  scene.add
    .rectangle(0, WORLD_HEIGHT, WORLD_WIDTH, 1500, OUTSIDE_COLOR)
    .setOrigin(0, 0)
    .setDepth(BOUND_MASK);

  scene.add
    .rectangle(-1500, -1500, 1500, 1500, OUTSIDE_COLOR)
    .setOrigin(0, 0)
    .setDepth(BOUND_MASK);

  scene.add
    .rectangle(WORLD_WIDTH, -1500, 1500, 1500, OUTSIDE_COLOR)
    .setOrigin(0, 0)
    .setDepth(BOUND_MASK);

  scene.add
    .rectangle(-1500, WORLD_HEIGHT, 1500, 1500, OUTSIDE_COLOR)
    .setOrigin(0, 0)
    .setDepth(BOUND_MASK);

  scene.add
    .rectangle(WORLD_WIDTH, WORLD_HEIGHT, 1500, 1500, OUTSIDE_COLOR)
    .setOrigin(0, 0)
    .setDepth(BOUND_MASK);
}
