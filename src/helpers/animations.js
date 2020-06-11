export const JET_MIN_SPEED = "jetMinSpeed";
export const JET_MAX_SPEED = "jetMaxSpeed";

export function makeAnimations(scene) {
  scene.anims.create({
    key: JET_MIN_SPEED,
    repeat: -1,
    frameRate: 60,
    frames: scene.anims.generateFrameNumbers(JET_MIN_SPEED, {
      start: 0,
      end: 2,
    }),
  });

  scene.anims.create({
    key: JET_MAX_SPEED,
    repeat: -1,
    frameRate: 50,
    frames: scene.anims.generateFrameNumbers(JET_MAX_SPEED, {
      start: 0,
      end: 2,
    }),
  });
}
