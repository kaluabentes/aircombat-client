import Phaser from "phaser";

import BootScene from "./scenes/BootScene";
import HudScene from "./scenes/HudScene";
import BattleScene from "./scenes/BattleScene";
import { OUTSIDE_COLOR, MAX_VIEWPORT_WIDTH } from "./config/game";

function main() {
  const { innerHeight, innerWidth, devicePixelRatio } = window;
  const width =
    innerWidth > MAX_VIEWPORT_WIDTH ? MAX_VIEWPORT_WIDTH : innerWidth;

  const game = new Phaser.Game({
    type: Phaser.CANVAS,
    width: width * devicePixelRatio,
    height: innerHeight * devicePixelRatio,
    scene: [BootScene, HudScene, BattleScene],
    backgroundColor: OUTSIDE_COLOR,
    physics: {
      default: "arcade",
    },
  });
}

main();
