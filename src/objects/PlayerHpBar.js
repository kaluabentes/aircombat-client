import HpBar from "./HpBar";

import createNameText from "../helpers/createNameText";

export default class PlayerHpBar extends HpBar {
  constructor(scene, x, y, hp, name) {
    super(scene, x, y, 300, 40, hp, 7);

    const nameText = createNameText(scene, 0, -50, name, 36);
    nameText.x = -(this.width - nameText.width) * 0.5 - this.strokeSize;
    this.add(nameText);
  }
}
