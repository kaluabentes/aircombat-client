import Phaser from "phaser";

import Cannon from "./Cannon";
import EnemyHpBar from "./EnemyHpBar";
import {
  JET_MAX_SPEED_ANIM,
  JET_MIN_SPEED_ANIM,
  EXPLOSION_ANIM,
} from "../config/animations";
import { JET_KEY, EXPLOSION_KEY } from "../config/keys";
import { BOUND_WRAP_PADDING, MAX_HP } from "../config/game";
import { JET_DEPTH } from "../config/depths";

export const JET_WIDTH = 172;
export const JET_HEIGHT = 264;

export default class Jet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, isPlayer, id, enemyName) {
    super(scene, x, y, JET_KEY);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Components
    this.id = id;
    this.camera = scene.cameras.main;
    this.leftCannon = new Cannon(scene);
    this.rightCannon = new Cannon(scene);
    this.cannonsAxis = scene.add.rectangle(this.x, this.y, 70, 50, 0xff0000);
    this.scene.physics.add.existing(this.cannonsAxis);
    this.cannonsAxis.setVisible(false);
    this.explosion = scene.add
      .sprite(this.x, this.y, EXPLOSION_KEY)
      .setScale(6)
      .setVisible(false)
      .on("animationcomplete", this.handleExplosionComplete, this);

    this.isPlayer = isPlayer;
    this.rotationVelocity = 0.03;
    this.minSpeed = 600;
    this.maxSpeed = 1400;
    this.hp = MAX_HP;

    if (!isPlayer) {
      this.hpBar = new EnemyHpBar(scene, this.x, this.y, this.hp, enemyName);
    }

    // Make camera follow the jet
    if (isPlayer) {
      this.bindCamera();
    }

    this.setDepth(JET_DEPTH);
    this.play(JET_MIN_SPEED_ANIM);
  }

  update() {
    if (this.hpBar) {
      this.hpBar.update(this);
    }

    const hitsSomeEnemy = this.scene.enemies.some((enemy) => {
      const { jet } = enemy;

      if (this.scene.physics.overlap(this, jet)) {
        jet.destroy();
        return true;
      }

      return false;
    });

    if (hitsSomeEnemy) {
      this.destroy();
    }

    // Teleports the jet when reachs the bounds.
    this.scene.physics.world.wrap(this, BOUND_WRAP_PADDING);
    this.scene.physics.world.wrap(this.cannonsAxis, BOUND_WRAP_PADDING);
  }

  bindCamera() {
    this.camera.startFollow(this);
  }

  turnRight() {
    this.rotation += this.rotationVelocity;
    this.cannonsAxis.rotation += this.rotationVelocity;
  }

  turnLeft() {
    this.rotation -= this.rotationVelocity;
    this.cannonsAxis.rotation -= this.rotationVelocity;
  }

  accelerateMaxSpeed() {
    this.accelerate(this.maxSpeed);
    this.play(JET_MAX_SPEED_ANIM, true);
  }

  accelerateMinSpeed() {
    this.accelerate(this.minSpeed);
    this.play(JET_MIN_SPEED_ANIM, true);
  }

  accelerate(speed) {
    const rotatedVelocity = this.scene.physics.velocityFromRotation(
      this.rotation,
      speed,
      Phaser.Math.Vector2(0, 0)
    );

    this.setVelocityX(rotatedVelocity.y);
    this.setVelocityY(-rotatedVelocity.x);
    this.cannonsAxis.body.setVelocityX(rotatedVelocity.y);
    this.cannonsAxis.body.setVelocityY(-rotatedVelocity.x);
  }

  fireCannons() {
    this.leftCannon.fire(
      this.cannonsAxis.getLeftCenter().x,
      this.cannonsAxis.getLeftCenter().y,
      this.cannonsAxis.rotation,
      this.id
    );
    this.rightCannon.fire(
      this.cannonsAxis.getRightCenter().x,
      this.cannonsAxis.getRightCenter().y,
      this.cannonsAxis.rotation,
      this.id
    );
  }

  takeDamage(damage) {
    this.hp -= damage;

    if (this.isPlayer) {
      // emit event;
    }
  }

  destroy() {
    this.hp = 0;
    this.setActive(false);
    this.setVisible(false);
    this.disableBody();

    if (!this.isPlayer) {
      this.hpBar.setActive(false);
      this.hpBar.setVisible(false);
    }

    this.explosion.x = this.x;
    this.explosion.y = this.y;
    this.explosion.setVisible(true).play(EXPLOSION_ANIM);
  }

  handleExplosionComplete() {
    this.explosion.setActive(false);
    this.explosion.setVisible(false);
  }
}
