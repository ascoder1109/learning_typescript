export const PI = 3.14;

export function calculateArea(radius : number) : number{
    return PI * radius * radius;
}

export class Circle{
    constructor(public radius : number){

    }

    area() {
        return calculateArea(this.radius);
    }
}