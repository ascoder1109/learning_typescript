var Car = /** @class */ (function () {
    function Car(wheels, speed) {
        this.speed = speed;
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        console.log("Driving at speed of ".concat(this.speed, " km/h with ").concat(this.wheels, " wheels."));
    };
    return Car;
}());
var myCar = new Car(4, 100);
myCar.drive();
