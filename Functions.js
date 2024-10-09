function greet(name) {
    return "Hello, ".concat(name);
}
console.log(greet("Alice"));
console.log(greet("Alice"));
//Optional parameters
function greettwo(name, age) {
    if (age)
        return "Hello ".concat(name, ", your age is ").concat(age);
    else
        return "Hello ".concat(name);
}
console.log(greettwo("Alice", 20));
//Default parameters
function greetDefaultParameter(name, age) {
    if (age === void 0) { age = 21; }
    return "Hello ".concat(name, ", your age is ").concat(age);
}
console.log(greetDefaultParameter("Jake"));
// Rest Parameter
function greeting() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    return "Hello, ".concat(name.join(", "));
}
console.log(greeting("Alice", "Bob", "Charlie"));
//void
function printMessage(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
//union
function getValue(value) {
    return value;
}
console.log(getValue(5)); // Output: 5
console.log(getValue("Hi"));
