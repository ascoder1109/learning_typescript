var age = 23;
var ename = "Hello World";
var isStudent = false;
var marks = [1, 2, 3, 4, 65, 6, 7]; //Array
var person = ["Alice", 45]; //Tuple
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var bannerColor = Color.Blue;
var anyValue = "Hello";
anyValue = 45;
