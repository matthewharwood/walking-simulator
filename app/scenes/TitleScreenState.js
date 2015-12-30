var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by mharwood on 12/30/15.
 */
var GameFromScratch;
(function (GameFromScratch) {
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.call(this);
        }
        TitleScreenState.prototype.preload = function () {
        };
        TitleScreenState.prototype.create = function () {
            this.titleScreenImage = this.add.sprite(0, 0, "title");
            this.titleScreenImage.scale.setTo(this.game.width / this.titleScreenImage.width, this.game.height
                / this.titleScreenImage.height);
            this.music = this.game.add.audio("TitleSong");
            this.music.volume = .1;
            this.music.loop = true;
            this.music.play();
            this.input.onTap.addOnce(this.titleClicked, this);
        };
        TitleScreenState.prototype.titleClicked = function () {
            this.music.stop();
            this.game.state.start("GamePlayState");
        };
        return TitleScreenState;
    })(Phaser.State);
    GameFromScratch.TitleScreenState = TitleScreenState;
})(GameFromScratch || (GameFromScratch = {}));
//# sourceMappingURL=TitleScreenState.js.map