function greet(name: string): string {
    return `Hello, ${name}`;
}  

console.log(greet("Alice"));  
console.log(greet("Alice"));


//Optional parameters

function greettwo(name: string , age?: number): string {
    if (age) return `Hello ${name}, your age is ${age}`;
    else return `Hello ${name}`
    
}

console.log(greettwo("Alice",20));

//Default parameters

function greetDefaultParameter(name: String, age : number = 21): string{
    return `Hello ${name}, your age is ${age}`;
    
}

console.log(greetDefaultParameter("Jake"));

// Rest Parameter

function greeting(...name: string[]) : string{
    return `Hello, ${name.join(", ")}`
}

console.log(greeting("Alice","Bob","Charlie"));

//void

function printMessage(message: String) : void {
    console.log(message)
}

function throwError(message: string): never {
    throw new Error(message);
}

//union

function getValue(value : number | string) : number | string{
    return value;
}


console.log(getValue(5));    // Output: 5
console.log(getValue("Hi"));

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2));      // Output: 3
console.log(add("Hello, ", "world!"))

const addArrow = (a: number, b: number): number => a + b;
console.log(addArrow(5,5))