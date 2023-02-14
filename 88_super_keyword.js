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
        // name aur age ke liye super/parant class ko use kr lo
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed} km/hr`; 
    }
} 

const tommy = new Dog("tommy", 3, 45);
console.log(tommy.run());
console.log(tommy);
// console.log(tommy.isCute()); 