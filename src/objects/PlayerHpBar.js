import HpBar from "./HpBar";

export default class PlayerHpBar extends HpBar {
  constructor(scene, x, y, hp) {
    super(scene, x, y, hp, 2);

    this.setScale(3);
  }
}
