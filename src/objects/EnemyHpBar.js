import HpBar from "./HpBar";

import { BOUND_WRAP_PADDING } from "../config/game";
import createNameText from "../helpers/createNameText";

export default class EnemyHpBar extends HpBar {
  constructor(scene, x, y, hp, name) {
    super(scene, x, y, 100, 20, hp, 4);

    const nameText = createNameText(scene, 0, 0, name, 36);
    nameText.y = -(this.height * 0.5) - 5;
    this.add(nameText);

    this.innerRectangle.y = this.height * 0.5 + 5;
    this.outerRectangle.y = this.height * 0.5 + 5;
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
