export default function makeAnimations(scene) {
  scene.anims.create({
    key: "fighterNormalVelocity",
    repeat: -1,
    frameRate: 60,
    frames: scene.anims.generateFrameNumbers("fighter", {
      start: 0,
      end: 2,
    }),
  });
}
