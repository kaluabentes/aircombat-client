import Phaser from "phaser";

import BattleScene from "../scene/BattleScene";

const MAX_WIDTH = 1280;

export default class Game extends Phaser.Game {
  constructor() {
    const width = window.innerWidth > MAX_WIDTH ? MAX_WIDTH : window.innerWidth;
    const height = window.innerHeight;

    super({
      type: Phaser.CANVAS,
      width: width * window.devicePixelRatio,
      height: height * window.devicePixelRatio,
      scene: [BattleScene],
    });
  }
}
