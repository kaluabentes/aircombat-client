import Phaser from "phaser";

import { JET_MAX_SPEED_ANIM, JET_MIN_SPEED_ANIM } from "../config/animations";
import { JET_SPRITE } from "../config/textures";

export default class Jet extends Phaser.Physics.Arcade.Sprite {
  constructor({ scene, x, y, spawnRandomly }) {
    super(scene, x, y);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setTexture(JET_SPRITE);
    this.play(JET_MIN_SPEED_ANIM);

    // Dependencies
    this.camera = scene.cameras.main;
    this.battleField = scene.battleField;

    if (spawnRandomly) {
      this.x = Phaser.Math.Between(
        this.width * 0.5,
        this.battleField.width - this.width * 0.5
      );
      this.y = Phaser.Math.Between(
        this.height * 0.5,
        this.battleField.height - this.height * 0.5
      );
    }

    this.rotationVelocity = 0.03;
    this.minSpeed = 1000;
    this.maxSpeed = 2000;

    // Make camera follow the jet
    this.camera.startFollow(this);
    this.camera.setFollowOffset(0, 0.8);
    this.camera.setOrigin(0.5, 0.8);
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
      this.play(JET_MAX_SPEED_ANIM, true);
    } else {
      this.accelerate(this.minSpeed);
      this.play(JET_MIN_SPEED_ANIM, true);
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
