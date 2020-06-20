import Phaser from "phaser";
import { BOUND_WRAP_PADDING } from "../config/game";
import { ENEMY_HEALTH_BAR_DEPTH } from "../config/depths";

export default class HealthBar extends Phaser.GameObjects.Container {
  constructor(scene, x, y, hp, isPlayer) {
    super(scene, x, y);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.width = 100;
    this.height = 20;
    this.strokeSize = 4;
    this.maxHp = hp;
    this.hp = hp;

    this.setDepth(ENEMY_HEALTH_BAR_DEPTH);
    this.draw();
  }

  update(jet) {
    const { player } = this.scene;

    if (!jet.body) {
      return;
    }

    this.body.setVelocityX(jet.body.velocity.x);
    this.body.setVelocityY(jet.body.velocity.y);
    // this.rotation = player.jet.rotation;
    this.scene.physics.world.wrap(this, BOUND_WRAP_PADDING);
    this.hp = jet.hp;
    this.innerRectangle.width = this.getPercentage() - this.strokeSize;
  }

  getPercentage() {
    return (this.hp / this.maxHp) * 100;
  }

  draw() {
    this.outerRectangle = this.scene.add
      .rectangle(0, 0, this.width, this.height, 0x4e9f41)
      .setStrokeStyle(this.strokeSize, 0x00000);

    this.innerRectangle = this.scene.add.rectangle(
      0,
      0,
      this.getPercentage() - this.strokeSize,
      this.height - this.strokeSize,
      0xffff00
    );

    this.add(this.outerRectangle);
    this.add(this.innerRectangle);
  }
}
