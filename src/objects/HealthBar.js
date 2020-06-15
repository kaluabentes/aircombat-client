import Phaser from "phaser";

export default class HealthBar extends Phaser.GameObjects.Container {
  constructor(scene, x, y, hp) {
    super(scene, x, y);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setDepth(3);

    this.width = 100;
    this.height = 20;
    this.strokeSize = 4;
    this.maxHp = hp;
    this.hp = hp;

    this.outerRectangle = scene.add
      .rectangle(0, 0, this.width, this.height, 0x4e9f41)
      .setStrokeStyle(this.strokeSize, 0x00000);

    this.innerRectangle = scene.add.rectangle(
      0,
      0,
      this.getPercentage() - this.strokeSize,
      this.height - this.strokeSize,
      0xffff00
    );

    this.add(this.outerRectangle);
    this.add(this.innerRectangle);
  }

  update(jet) {
    const { player } = this.scene;
    this.body.setVelocityX(jet.body.velocity.x);
    this.body.setVelocityY(jet.body.velocity.y);
    this.rotation = player.jet.rotation;
    this.scene.physics.world.wrap(this, 0);
    this.hp = jet.hp;
    this.innerRectangle.width = this.getPercentage() - this.strokeSize;
  }

  getPercentage() {
    return (this.hp / this.maxHp) * 100;
  }
}