import Phaser from "phaser";

import { BULLET_KEY } from "../config/keys";
import { BULLET_DEPTH } from "../config/depths";

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, BULLET_KEY);

    this.speed = 8000;
    this.range = 1500;
    this.damage = 20;

    this.setDepth(BULLET_DEPTH);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    const { enemies, player } = this.scene;
    const playerJetId = player.jet.id;

    // Detects collision
    const hitsSomeJet = [...enemies, player].some((enemy) => {
      const { jet } = enemy;

      if (jet.id !== this.jetId && this.scene.physics.overlap(this, jet)) {
        jet.takeDamage(this.damage);

        if (jet.hp <= 0 && jet.active) {
          if (playerJetId === this.jetId) {
            player.score();
          }

          jet.destroy();
        }

        return true;
      }

      return false;
    });

    if (Math.abs(this.startY - this.y) > this.range || hitsSomeJet) {
      this.setActive(false);
      this.setVisible(false);
    }
  }

  setJetId(id) {
    this.jetId = id;
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
