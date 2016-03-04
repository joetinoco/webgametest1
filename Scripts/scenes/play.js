var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
//
// Main game scene
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Startup die values
            this._die1 = "1";
            this._die2 = "1";
            // Add dice labels
            this._die1Label = new objects.Label(this._die1, "60px Consolas", "#000000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 50);
            this.addChild(this._die1Label);
            this._die2Label = new objects.Label(this._die2, "60px Consolas", "#000000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 50);
            this.addChild(this._die2Label);
            // Add dice images
            this._die1Image = new objects.Die(this._die1, config.Screen.CENTER_X - 150, config.Screen.CENTER_Y - 50);
            this.addChild(this._die1Image);
            this._die2Image = new objects.Die(this._die2, config.Screen.CENTER_X + 150, config.Screen.CENTER_Y - 50);
            this.addChild(this._die2Image);
            // Add roll button
            this._rollButton = new objects.Button("RollButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._rollButton);
            // Roll button event listener
            this._rollButton.on("click", this._rollButtonClick, this);
            // Add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            // Redraw all elements
            this.removeAllChildren();
            this.addChild(this._die1Label);
            this.addChild(this._die2Label);
            this.addChild(this._die1Image);
            this.addChild(this._die2Image);
            this.addChild(this._rollButton);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            // Randomize the die results
            this._die1 = this.randomDieResult();
            this._die2 = this.randomDieResult();
            // Update dice images and labels according to the new values
            this._die1Label = new objects.Label(this._die1, "60px Consolas", "#000000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 50);
            this._die2Label = new objects.Label(this._die2, "60px Consolas", "#000000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 50);
            this._die1Image = new objects.Die(this._die1, config.Screen.CENTER_X - 150, config.Screen.CENTER_Y - 50);
            this._die2Image = new objects.Die(this._die2, config.Screen.CENTER_X + 150, config.Screen.CENTER_Y - 50);
        };
        // AUXILIARY FUNCTIONS ++++++++++++++++++++
        // Generates a random die result
        Play.prototype.randomDieResult = function () {
            return Math.ceil(Math.random() * 6).toString();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map