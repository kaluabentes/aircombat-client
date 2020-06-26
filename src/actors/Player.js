import { v4 as uuid } from "uuid";

import createRandomJet from "../helpers/createRandomJet";

export default class Player {
  constructor(scene, jet, name) {
    this.scene = scene;
    this.jet = jet;
    this.name = name;
  }

  update() {
    if (this.jet.active) {
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

  // TODO
  score() {}

  createJet() {
    this.jet = createRandomJet(this.scene, true, uuid(), this.name);
  }
}
