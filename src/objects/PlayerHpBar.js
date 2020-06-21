import HpBar from "./HpBar";

export default class PlayerHpBar extends HpBar {
  constructor(scene, x, y, hp) {
    super(scene, x, y, 300, 40, hp, 7);

    // this.setScale(3);
  }
}
