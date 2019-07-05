import "phaser";
import { Version } from "../version";


export default class GameScene extends Phaser.Scene {
  private logoPNG = require("../assets/images/logo/divint-logo-256x256.png");
    
  constructor() {
    super("GameScene");

    console.log(`GameScene::constructor() : ${Version}`);
  }

  preload() {
    this.load.image('logo', this.logoPNG);
  }

  create() {
    this.add.sprite(window.innerWidth >> 1, window.innerHeight >> 1, 'logo');
  }

  update() {
  }
}
