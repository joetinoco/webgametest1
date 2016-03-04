var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // DIE object
    // Represents a game die image
    var Die = (function (_super) {
        __extends(Die, _super);
        //CONSTRUCTOR
        function Die(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            this.x = x;
            this.y = y;
            this.width = 81;
            this.height = 81;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        return Die;
    })(createjs.Bitmap);
    objects.Die = Die;
})(objects || (objects = {}));
//# sourceMappingURL=die.js.map