abstract class Animal{
    move() : void{
        console.log("Moving...");
    }

}

class Dog extends Animal{
    makeSound() : void {
        console.log("Bark")
    }
}

let myDog = new Dog();
myDog.makeSound();
myDog.move();