import Phaser, { Scene } from "phaser";

import Jet, { JET_WIDTH, JET_HEIGHT } from "../objects/Jet";
import { WORLD_HEIGHT, WORLD_WIDTH } from "../config/game";

export default function createRandomJet(scene, isPlayer = false) {
  return new Jet(
    scene,
    Phaser.Math.Between(JET_WIDTH * 0.5, WORLD_WIDTH - JET_WIDTH * 0.5),
    Phaser.Math.Between(JET_HEIGHT * 0.5, WORLD_HEIGHT - JET_HEIGHT * 0.5),
    isPlayer
  );
}
