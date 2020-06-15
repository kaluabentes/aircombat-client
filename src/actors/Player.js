export default class Player {
  constructor(scene, jet) {
    this.scene = scene;
    this.jet = jet;
  }

  update() {
    const arrowKeys = this.scene.input.keyboard.createCursorKeys();
    const spaceKey = this.scene.input.keyboard.addKey("SPACE");

    if (arrowKeys.right.isDown) {
      this.jet.turnRight();
    }

    if (arrowKeys.left.isDown) {
      this.jet.turnLeft();
    }

    if (arrowKeys.up.isDown) {
      this.jet.accelerateMaxSpeed();
    } else {
      this.jet.accelerateMinSpeed();
      // this.jet.accelerate(0);
    }

    if (spaceKey.isDown) {
      this.jet.fireCannons();
    }

    this.jet.update();
  }
}
