import Phaser from "phaser";

import BootScene from "./scenes/BootScene";
import BattleScene from "./scenes/BattleScene";
import { OUTSIDE_COLOR, MAX_GAME_WIDTH } from "./config/settings";

function main() {
  const { innerHeight, innerWidth, devicePixelRatio } = window;
  const width = innerWidth > MAX_GAME_WIDTH ? MAX_GAME_WIDTH : innerWidth;

  const game = new Phaser.Game({
    type: Phaser.CANVAS,
    width: width * devicePixelRatio,
    height: innerHeight * devicePixelRatio,
    scene: [BootScene, BattleScene],
    backgroundColor: OUTSIDE_COLOR,
    physics: {
      default: "arcade",
    },
  });
}

main();
