import "phaser";
import { Version } from "../version";

export default class GameScene extends Phaser.Scene {
  private logoPNG = require("../assets/images/logo/divint-logo-256x256.png");
  private logoSprite;
  private xd: number;
  private yd: number;

  constructor() {
    super("GameScene");

    console.log(`GameScene::constructor() : ${Version}`);
  }

  preload() {
    this.load.image('logo', this.logoPNG);
  }

  create() {
    this.logoSprite = this.add.sprite(window.innerWidth >> 1, window.innerHeight >> 1, 'logo');
    this.xd = 1;
    this.yd = 1;
  }

  update() {
    this.logoSprite.x += this.xd;
    this.logoSprite.y += this.yd;

    if (this.logoSprite.x < (this.logoSprite.width >> 1)) {
      this.xd = 1;
    }
    if (this.logoSprite.y < (this.logoSprite.height >> 1)) {
      this.yd = 1;
    }
     if (this.logoSprite.x > (window.innerWidth - (this.logoSprite.width >> 1))) {
      this.xd = -1;
    }
    if (this.logoSprite.y > (window.innerHeight - (this.logoSprite.height >> 1))) {
      this.yd = -1;
    }

  }
}
