var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello I am ".concat(this.name, " and I am ").concat(this.age, " years old");
    };
    return Person;
}());
var alice = new Person("Alice", 20);
console.log(alice.greet());
