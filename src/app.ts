import "./Importer";
import { WelcomeScene } from "./welcomeScene";
import { GameScene } from "./gameScene";
import { ScoreScene } from "./scoreScene";

const config: Phaser.Types.Core.GameConfig = {
  title: "Starfall",
  width: 800,
  height: 600,
  parent: "game",
  scene: [WelcomeScene, GameScene, ScoreScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  backgroundColor: "#18216D"
};

export class StarfallGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
};

window.onload = () => {
  var game = new StarfallGame(config);
};
