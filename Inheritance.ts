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

class Employee extends Person {
    jobTitle: string;
    constructor(name: string, age: number, jobTitle: string) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    describe() {
        return `${this.greet()} and I work as a ${this.jobTitle}`;
    }
}

let bob = new Employee("Bob", 30, "Engineer");
console.log(bob.describe())