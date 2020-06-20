import {
  JET_MAX_SPEED_ANIM,
  JET_MIN_SPEED_ANIM,
  EXPLOSION_ANIM,
} from "../config/animations";
import { JET_KEY, EXPLOSION_KEY } from "../config/keys";

/**
 * Create all the sprite animations.
 * @param {Phaser.Scene} scene
 */
export default function createAnimations(scene) {
  scene.anims.create({
    key: JET_MAX_SPEED_ANIM,
    repeat: -1,
    frameRate: 60,
    frames: scene.anims.generateFrameNumbers(JET_KEY, {
      start: 1,
      end: 3,
    }),
  });

  scene.anims.create({
    key: JET_MIN_SPEED_ANIM,
    frames: [{ key: JET_KEY, frame: 0 }],
  });

  scene.anims.create({
    key: EXPLOSION_ANIM,
    repeat: 0,
    frameRate: 15,
    frames: scene.anims.generateFrameNumbers(EXPLOSION_KEY, {
      start: 0,
      end: 15,
    }),
  });
}
