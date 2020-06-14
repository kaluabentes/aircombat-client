import Phaser from "phaser";

import Cannon from "./Cannon";
import { JET_MAX_SPEED_ANIM, JET_MIN_SPEED_ANIM } from "../config/animations";
import { JET_KEY } from "../config/keys";

export default class Jet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, JET_KEY);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setDepth(2);
    this.play(JET_MIN_SPEED_ANIM);

    // Dependencies
    this.camera = scene.cameras.main;
    this.leftCannon = new Cannon(scene);
    this.rightCannon = new Cannon(scene);
    this.cannonsAxis = this.scene.add.rectangle(
      this.x,
      this.y - 90,
      80,
      50,
      0xff0000
    );
    this.cannonsAxis.setVisible(false);

    this.rotationVelocity = 0.03;
    this.minSpeed = 600;
    this.maxSpeed = 1400;

    // Make camera follow the jet
    this.camera.startFollow(this);
    this.camera.setFollowOffset(0, 0.8);
    this.camera.setOrigin(0.5, 0.8);
  }

  update() {
    const arrowKeys = this.scene.input.keyboard.createCursorKeys();
    const spaceKey = this.scene.input.keyboard.addKey("SPACE");

    if (arrowKeys.right.isDown) {
      this.rotation += this.rotationVelocity;
      this.camera.rotation -= this.rotationVelocity;
      this.cannonsAxis.rotation += this.rotationVelocity;
    }

    if (arrowKeys.left.isDown) {
      this.rotation -= this.rotationVelocity;
      this.camera.rotation += this.rotationVelocity;
      this.cannonsAxis.rotation -= this.rotationVelocity;
    }

    if (arrowKeys.up.isDown) {
      this.accelerate(this.maxSpeed);
      this.play(JET_MAX_SPEED_ANIM, true);
    } else {
      this.accelerate(this.minSpeed);
      this.play(JET_MIN_SPEED_ANIM, true);
    }

    if (spaceKey.isDown) {
      this.fireCannons();
    }
  }

  accelerate(speed) {
    const rotatedVelocity = this.scene.physics.velocityFromRotation(
      this.rotation,
      speed,
      Phaser.Math.Vector2(0, 0)
    );

    this.setVelocityX(rotatedVelocity.y);
    this.setVelocityY(-rotatedVelocity.x);
    this.cannonsAxis.x = this.x;
    this.cannonsAxis.y = this.y;
  }

  fireCannons() {
    this.leftCannon.fire(
      this.cannonsAxis.getLeftCenter().x,
      this.cannonsAxis.getLeftCenter().y,
      this.cannonsAxis.rotation
    );
    this.rightCannon.fire(
      this.cannonsAxis.getRightCenter().x,
      this.cannonsAxis.getRightCenter().y,
      this.cannonsAxis.rotation
    );
  }
}
