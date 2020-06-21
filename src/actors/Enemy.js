export default class Enemy {
  constructor(scene, jet) {
    this.scene = scene;
    this.jet = jet;
  }

  update() {
    if (this.jet.active) {
      // Fake AI
      // this.jet.accelerateMaxSpeed();
      // this.jet.turnLeft();
      this.jet.fireCannons();
      this.jet.update();
    }
  }
}
