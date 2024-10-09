class Shape{
    area(): number{
        return 0;
    }
}

class Rectangle extends Shape{
    constructor(public width: number, public height: number){
        super();
    }

    area() : number{
        return this.width * this.height;
    }
}

let rect = new Rectangle(5,10);
console.log(rect.area());