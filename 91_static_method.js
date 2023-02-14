// static methods and properties

class Person{
    constructor(fName , lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    static desc = "static property";
    static classInfo(){
        return `this is person class`;
    }


    get fullName(){
        return `${this.fName} ${this.lName}`;
    }

    
    set fullName(fullName){
        const [firstname ,lastname] = fullName.split(" ");
        this.fName = firstname;
        this.lName = lastname;
    }

    eat(){
        return `${this.fName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
} 

const person1 = new Person("Ravikant" , "vaishnav" , 21);
console.log(person1.eat());

// abhi jo bhi methods apn ne bnaye vo sare object ke through hi 
// call ho rhe hai  but ab vo method bnayege jo class
// ke trough call ho ske


//ab classInfo ko class ke through call kiya ja skta hai
console.log(Person.classInfo());

// console.log(person1.classInfo()); // ab aise object ke 
// through access nhi kr skte hai, error de dega

// jasie static method bnaya vaise static properties bhi bna skte hai 

console.log(Person.desc);
