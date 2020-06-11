export default function makeAnimations(scene) {
  scene.anims.create({
    key: "jetMinimumSpeed",
    repeat: -1,
    frameRate: 60,
    frames: scene.anims.generateFrameNumbers("jet", {
      start: 0,
      end: 2,
    }),
  });
}
