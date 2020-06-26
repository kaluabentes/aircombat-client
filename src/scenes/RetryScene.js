import Phaser from "phaser";

import createNameText from "../helpers/createNameText";

export default class RetryScene extends Phaser.Scene {
  constructor() {
    super({
      key: "RetryScene",
    });
  }

  create(data) {
    const { player } = data;
    const { centerX, centerY } = this.cameras.main;

    const retry = () => {
      player.createJet();
      this.scene.stop("RetryScene");
    };

    const retryButton = createNameText(this, centerX, centerY, "Retry", 72);
    retryButton.setInteractive();
    retryButton.on("pointerup", retry);
  }
}
