import Phaser from "phaser";

export default class BattleField extends Phaser.GameObjects.Image {
  constructor({ scene, x, y }) {
    super(scene, x, y);

    this.setTexture("battleField");
    this.setOrigin(0, 0);
  }
}
