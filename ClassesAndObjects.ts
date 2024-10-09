class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello I am ${this.name} and I am ${this.age} years old`
    }
}

let alice = new Person("Alice", 20);
console.log(alice.greet())

export{}