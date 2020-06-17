export default class Enemy {
  constructor(scene, jet) {
    this.scene = scene;
    this.jet = jet;
  }

  update() {
    // Fake AI
    // this.jet.accelerateMinSpeed();
    // this.jet.turnLeft();
    // this.jet.fireCannons();
    this.jet.update();
  }
}
