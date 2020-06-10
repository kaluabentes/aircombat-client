import Phaser from "phaser";

export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor({ scene, x, y }) {
    super(scene, x, y);

    this.rotationVelocity = 0.03;
    this.camera = scene.cameras.main;
    this.battleField = scene.battleField;
    this.width = 245;
    this.height = 350;
    this.initialY = this.battleField.height - this.height - 30;

    // Start to follow the fighter.
    this.camera.startFollow(this);
    this.camera.setFollowOffset(0, 0.8);
    this.camera.setOrigin(0.5, 0.8);

    this.setTexture("fighter");
    this.play("fighterNormalVelocity");
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    this.y += -5;

    if (this.y < 1000) {
      this.y = this.initialY;
    }
  }

  update(input) {
    if (input.right.isDown) {
      this.rotation += this.rotationVelocity;
      this.camera.rotation -= this.rotationVelocity;
    }

    if (input.left.isDown) {
      this.rotation -= this.rotationVelocity;
      this.camera.rotation += this.rotationVelocity;
    }
  }
}
