import { JET_MAX_SPEED_ANIM, JET_MIN_SPEED_ANIM } from "../config/animations";
import { JET_SPRITE } from "../config/textures";

export default function makeAnimations(scene) {
  scene.anims.create({
    key: JET_MAX_SPEED_ANIM,
    repeat: -1,
    frameRate: 60,
    frames: scene.anims.generateFrameNumbers(JET_SPRITE, {
      start: 3,
      end: 5,
    }),
  });

  scene.anims.create({
    key: JET_MIN_SPEED_ANIM,
    repeat: -1,
    frameRate: 60,
    frames: scene.anims.generateFrameNumbers(JET_SPRITE, {
      start: 0,
      end: 2,
    }),
  });
}
