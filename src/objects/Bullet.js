import Phaser from "phaser";

import { BULLET_KEY } from "../config/keys";
import { WORLD_HEIGHT } from "../config/game";

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, BULLET_KEY);

    this.speed = 8000;
    this.range = 1500;
    this.damage = 15;
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    const { enemies, player } = this.scene;

    const hitsAnyJet = enemies.some((enemy) => {
      const { jet } = enemy;

      if (this.scene.physics.overlap(this, jet)) {
        jet.hp -= this.damage;

        if (jet.hp <= 0) {
          jet.destroy();
          return false;
        }

        return true;
      }

      return false;
    });

    if (Math.abs(this.startY - this.y) > this.range || hitsAnyJet) {
      this.setActive(false);
      this.setVisible(false);
    }
  }

  accelerate(x, y, angle) {
    this.body.reset(x, y);
    this.startY = y;

    this.setActive(true);
    this.setVisible(true);

    this.rotation = angle;

    const rotatedVelocity = this.scene.physics.velocityFromRotation(
      this.rotation,
      this.speed,
      Phaser.Math.Vector2(0, 0)
    );

    this.setVelocityX(rotatedVelocity.y);
    this.setVelocityY(-rotatedVelocity.x);
  }
}
