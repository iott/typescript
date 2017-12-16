var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var a = Color.Blue; // 0
var b = Color.Red; // 0
var c = Color.Green; // 1
console.log(a, b, c);
