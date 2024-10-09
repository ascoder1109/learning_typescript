var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName) {
                this._name = newName;
            }
            else {
                console.log("Name cannot be empty");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        // Getter for age
        get: function () {
            return this._age;
        },
        // Setter for age
        set: function (newAge) {
            if (newAge > 0) {
                this._age = newAge;
            }
            else {
                console.log("Age must be positive");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("Alice", 30);
console.log(person.name); // Accessing the name via getter
person.name = "Bob"; // Modifying the name via setter
console.log(person.name); // Accessing the updated name
console.log(person.age); // Accessing the age via getter
person.age = 35; // Modifying the age via setter
console.log(person.age);
