import Phaser from "phaser";

import Player from "../actors/Player";
import Enemy from "../actors/Enemy";
import Ground from "../objects/Ground";
import { WORLD_WIDTH, WORLD_HEIGHT } from "../config/game";
import createRandomJet from "../helpers/createRandomJet";
import createClouds from "../helpers/createClouds";
import createBoundsMask from "../helpers/createBoundsMask";

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

    createClouds(this, 400);

    this.player = new Player(this, createRandomJet(this, true));

    for (let i = 0; i < 10; i++) {
      this.enemies.push(new Enemy(this, createRandomJet(this)));
    }

    createBoundsMask(this);
  }

  update() {
    this.player.update();

    this.enemies.forEach((enemy) => {
      enemy.update();
    });
  }
}
