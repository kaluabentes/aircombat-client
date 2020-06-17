import Phaser from "phaser";

import Player from "../actors/Player";
import Enemy from "../actors/Enemy";
import Ground from "../objects/Ground";
import Cloud from "../objects/Cloud";
import { WORLD_WIDTH, WORLD_HEIGHT } from "../config/game";
import createBoundsMask from "../helpers/createBoundsMask";
import createRandomJet from "../helpers/createRandomJet";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BattleScene",
    });

    this.enemies = [];
  }

  create() {
    this.physics.world.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    this.ground = new Ground(this, 0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    for (let i = 0; i < 300; i++) {
      let cloud = new Cloud(this, 0, 0);
      cloud.setX(Phaser.Math.Between(0, WORLD_WIDTH - cloud.width));
      cloud.setY(Phaser.Math.Between(0, WORLD_HEIGHT - cloud.height));
      cloud.setAngle(Phaser.Math.Between(0, 360));
    }

    this.player = new Player(this, createRandomJet(this, true));

    for (let i = 0; i < 10; i++) {
      this.enemies.push(new Enemy(this, createRandomJet(this)));
    }

    // Add bounds mask to hide jet when hit bounds
    createBoundsMask(this);
  }

  update() {
    this.player.update();

    this.enemies.forEach((enemy) => {
      enemy.update();
    });
  }
}
