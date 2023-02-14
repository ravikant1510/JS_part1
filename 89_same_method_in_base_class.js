class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed} km/hr`; 
    }

    eat(){
        return `modified eat : ${this.name} is eating `
    }
} 

const tommy = new Dog("tommy", 3, 45);
console.log(tommy.run());
// eat agar Dog vale main nhi bnate to Animal (parent) class vale ka call kr leta
console.log(tommy.eat());
console.log(tommy);
// console.log(tommy.isCute()); 