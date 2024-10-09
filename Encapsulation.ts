class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName) {
            this._name = newName;
        } else {
            console.log("Name cannot be empty");
        }
    }

    // Getter for age
    get age(): number {
        return this._age;
    }

    // Setter for age
    set age(newAge: number) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be positive");
        }
    }
}

let person = new Person("Alice", 30);

console.log(person.name); // Accessing the name via getter
person.name = "Bob";      // Modifying the name via setter
console.log(person.name); // Accessing the updated name

console.log(person.age);  // Accessing the age via getter
person.age = 35;          // Modifying the age via setter
console.log(person.age)