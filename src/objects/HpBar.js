import Phaser from "phaser";

import { ENEMY_HEALTH_BAR_DEPTH } from "../config/depths";

export default class HpBar extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, height, hp, strokeSize) {
    super(scene, x, y);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.width = width;
    this.height = height;
    this.strokeSize = strokeSize;
    this.maxHp = hp;
    this.hp = hp;

    this.setDepth(ENEMY_HEALTH_BAR_DEPTH);
    this.draw();
  }

  update(jet) {
    this.hp = jet.hp;
    this.innerRectangle.width =
      this.nextInnerWidth < 0 ? 0 : this.nextInnerWidth;
  }

  get nextInnerWidth() {
    return this.width * this.hpPercentage - this.strokeSize;
  }

  get hpPercentage() {
    return (this.hp / this.maxHp) * 1;
  }

  draw() {
    this.outerRectangle = this.scene.add
      .rectangle(0, 0, this.width, this.height, 0x4e9f41)
      .setStrokeStyle(this.strokeSize, 0x00000);

    this.innerRectangle = this.scene.add.rectangle(
      0,
      0,
      this.nextInnerWidth,
      this.height - this.strokeSize,
      0xffff00
    );

    this.add(this.outerRectangle);
    this.add(this.innerRectangle);
  }
}
