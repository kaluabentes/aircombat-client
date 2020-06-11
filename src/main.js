import Phaser from "phaser";

import BootScene from "./scenes/BootScene";
import BattleScene from "./scenes/BattleScene";

const MAX_WIDTH = 1280;

function main() {
  const width = window.innerWidth > MAX_WIDTH ? MAX_WIDTH : window.innerWidth;

  const game = new Phaser.Game({
    type: Phaser.CANVAS,
    width: width * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    scene: [BootScene, BattleScene],
    physics: {
      default: "arcade",
    },
  });
}

main();
