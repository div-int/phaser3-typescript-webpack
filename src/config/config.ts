export default {
  type: Phaser.AUTO,
  parent: "Phaser3",
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#ffffff',
  pixelArt: true,
  roundPixels: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { x: 0, y: 0 }
    }
  }
};
