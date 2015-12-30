System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                        create: this.create, preload: this.preload
                    });
                }
                AppComponent.prototype.preload = function () {
                    // Graphics
                    this.game.load.image("title", "assets/images/TitleScreen.png");
                    // Audio
                    this.game.load.audio("TitleSong", ["assets/audio/TitleSong.mp3", "assets/audio/TitleSong.ogg",
                        "assets/audio/TitleSong.wav"]);
                };
                AppComponent.prototype.create = function () {
                    this.game.state.add("TitleScreenState", GameFromScratch.TitleScreenState, true);
                    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                };
                AppComponent.prototype.ngOnInit = function () {
                    window.onload = function () {
                        var game = new Game.ExtremeWalkingSimulator();
                    };
                };
                AppComponent.prototype.ngOnDestroy = function () {
                    console.log('ngOnDestroy');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map