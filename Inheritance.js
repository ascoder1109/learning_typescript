var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, jobTitle) {
        var _this = _super.call(this, name, age) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.describe = function () {
        return "".concat(this.greet(), " and I work as a ").concat(this.jobTitle);
    };
    return Employee;
}(Person));
var bob = new Employee("Bob", 30, "Engineer");
console.log(bob.describe());
