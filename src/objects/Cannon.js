import Phaser from "phaser";

import Bullet from "./Bullet";

export default class Cannon extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.fireRate = 100;
    this.fireInterval = 0;

    this.createMultiple({
      frameQuantity: 20,
      key: "bullet",
      active: false,
      visible: false,
      classType: Bullet,
    });
  }

  fire(x, y, angle) {
    const canFire =
      this.scene.game.getTime() > this.fireInterval &&
      this.countActive(false) > 0;

    if (canFire) {
      const bullet = this.getFirstDead(false);
      bullet.accelerate(x, y, angle);

      this.fireInterval = this.scene.game.getTime() + this.fireRate;
    }
  }
}
