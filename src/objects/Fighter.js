import Phaser from "phaser";

export default class Fighter extends Phaser.GameObjects.Sprite {
  constructor({ scene, x, y }) {
    super(scene, x, y);

    this.battleField = scene.battleField;
    this.width = 245;
    this.height = 350;
    this.x = this.scene.cameras.main.centerX - this.width * 0.5;
    this.y = this.battleField.height - this.height - 30;

    // Start to follow the fighter.
    this.scene.cameras.main.startFollow(this);
    this.scene.cameras.main.setFollowOffset(
      -this.width * 0.5,
      this.height - 60
    );

    this.setOrigin(0, 0);
    this.setTexture("fighter");
    this.play("fighterNormalVelocity");
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    this.y += -5;
  }
}
