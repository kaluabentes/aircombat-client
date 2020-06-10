import Phaser from "phaser";

import fighterImage from "../assets/images/fighter.png";

export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.width = 245;
    this.height = 350;
    this.x = this.scene.cameras.main.centerX - this.width * 0.5;
    this.y = this.scene.cameras.main.height - this.height - 30;

    this.setOrigin(0, 0);
    this.setTexture("fighter");
    this.play("fighterNormalVelocity");
  }
}
