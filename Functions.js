function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet("Alice"));
function greettwo(name, age) {
    if (age)
        return "Hello ".concat(name, ", your age is ").concat(age);
    else
        return "Hello ".concat(name);
}
console.log(greettwo("Alice", 20));
