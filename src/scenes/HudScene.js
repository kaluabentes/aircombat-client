import Phaser from "phaser";

import PlayerHpBar from "../objects/PlayerHpBar";
import { MAX_HP } from "../config/game";

export default class HudScene extends Phaser.Scene {
  constructor() {
    super({
      key: "HudScene",
    });
  }

  create(data) {
    const { player } = data;
    const { jet } = player;
    this.jet = jet;

    this.scene.sendToBack("GameScene");
    this.playerHpBar = new PlayerHpBar(this, 170, 50, jet.hp, 1);
  }

  update() {
    this.playerHpBar.update(this.jet);
  }
}
