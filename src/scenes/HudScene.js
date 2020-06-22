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
    this.playerHpBar = new PlayerHpBar(this, 180, 90, jet.hp, player.name);
  }

  update() {
    this.playerHpBar.update(this.jet);
  }
}
