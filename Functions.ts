function greet(name: string):string{
    return `Hello ${name}`
}

console.log(greet("Alice"));

function greettwo(name: string , age?: number): string {
    if (age) return `Hello ${name}, your age is ${age}`;
    else return `Hello ${name}`
    
}

console.log(greettwo("Alice",20));