/**
 * Created by mharwood on 12/30/15.
 */
import {Component, OnInit, OnDestroy} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: ''
})
export class AppComponent implements OnInit, OnDestroy {
  game:Phaser.Game;

  constructor() {
    this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
      create: this.create, preload: this.preload
    });
  }

  preload() {
    // Graphics
    this.game.load.image("title", "assets/images/TitleScreen.png");

    // Audio
    this.game.load.audio("TitleSong", ["assets/audio/TitleSong.mp3", "assets/audio/TitleSong.ogg",
      "assets/audio/TitleSong.wav"]);
  }

  create() {
    this.game.state.add("TitleScreenState", GameFromScratch.TitleScreenState, true);
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  }

  ngOnInit() {
    window.onload = () => {
      var game = new Game.ExtremeWalkingSimulator();
    };
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}