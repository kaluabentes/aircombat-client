import Phaser from "phaser";

export default class BattleField extends Phaser.Physics.Arcade.Sprite {
  constructor({ scene, x, y }) {
    super(scene, x, y);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setTexture("battleField");
    this.setOrigin(0, 0);
  }
}
