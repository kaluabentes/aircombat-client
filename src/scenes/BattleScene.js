import Phaser from "phaser";

import Player from "../actors/Player";
import Enemy from "../actors/Enemy";
import Jet from "../objects/Jet";
import Ground from "../objects/Ground";
import Cloud from "../objects/Cloud";
import {
  WORLD_WIDTH,
  WORLD_HEIGHT,
  JET_WIDTH,
  JET_HEIGHT,
} from "../config/game";
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

    for (let i = 0; i < 300; i++) {
      let cloud = new Cloud(this, 0, 0);
      cloud.setX(Phaser.Math.Between(0, WORLD_WIDTH - cloud.width));
      cloud.setY(Phaser.Math.Between(0, WORLD_HEIGHT - cloud.height));
      cloud.setAngle(Phaser.Math.Between(0, 360));
    }

    this.player = new Player(
      this,
      new Jet(
        this,
        Phaser.Math.Between(JET_WIDTH * 0.5, WORLD_WIDTH - JET_WIDTH * 0.5),
        Phaser.Math.Between(JET_HEIGHT * 0.5, WORLD_HEIGHT - JET_HEIGHT * 0.5),
        true
      )
    );

    for (let i = 0; i < 20; i++) {
      this.enemies.push(
        new Enemy(
          this,
          new Jet(
            this,
            Phaser.Math.Between(JET_WIDTH * 0.5, WORLD_WIDTH - JET_WIDTH * 0.5),
            Phaser.Math.Between(
              JET_HEIGHT * 0.5,
              WORLD_HEIGHT - JET_HEIGHT * 0.5
            )
          )
        )
      );
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
