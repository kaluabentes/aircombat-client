import Phaser from "phaser";

export default class Fighter extends Phaser.Physics.Arcade.Sprite {
  constructor({ scene, x, y }) {
    super(scene, x, y);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Dependencies
    this.camera = scene.cameras.main;
    this.battleField = scene.battleField;

    this.width = 245;
    this.height = 350;
    this.rotationVelocity = 0.03;
    this.minSpeed = 1000;
    this.maxSpeed = 2000;

    // Make camera follow the fighter
    this.camera.startFollow(this);
    this.camera.setFollowOffset(0, 0.8);
    this.camera.setOrigin(0.5, 0.8);

    this.setTexture("fighter");
    this.play("fighterNormalVelocity");
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

    if (input.up.isDown) {
      this.accelerate(this.maxSpeed);
    } else {
      this.accelerate(this.minSpeed);
    }
  }

  accelerate(speed) {
    const moved = this.scene.physics.velocityFromRotation(
      this.rotation,
      speed,
      new Phaser.Math.Vector2(this.body.velocity.x, this.body.velocity.y)
    );
    this.setVelocityX(moved.y);
    this.setVelocityY(-moved.x);
  }
}
