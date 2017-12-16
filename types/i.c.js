var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Control));
// Error: Property 'state' is missing in type 'Image'.
var ImageC = /** @class */ (function (_super) {
    __extends(ImageC, _super);
    function ImageC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageC.prototype.select = function () { };
    return ImageC;
}(Control));
var LocationC = /** @class */ (function () {
    function LocationC() {
    }
    return LocationC;
}());
function invoke(t) {
    console.log(t);
}
invoke(new Button());
// invoke(new Location());
