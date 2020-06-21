import HpBar from "./HpBar";

import { BOUND_WRAP_PADDING } from "../config/game";

export default class EnemyHpBar extends HpBar {
  constructor(scene, x, y, hp) {
    super(scene, x, y, hp, 4);
  }

  update(jet) {
    if (!jet.body) {
      return;
    }

    this.body.setVelocityX(jet.body.velocity.x);
    this.body.setVelocityY(jet.body.velocity.y);
    this.scene.physics.world.wrap(this, BOUND_WRAP_PADDING);
    super.update(jet);
  }
}
