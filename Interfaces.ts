interface Vehicle{
    wheels: number;
    speed: number;
    drive():void;
}

class Car implements Vehicle {
    wheels: number;
    speed: number;
    constructor (wheels: number, speed: number){
        this.speed = speed;
        this.wheels = wheels;
    }
    drive(): void {
        console.log(`Driving at speed of ${this.speed} km/h with ${this.wheels} wheels.`);
    }
}

let myCar = new Car(4, 100);
myCar.drive();