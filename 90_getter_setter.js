// getter and setters


// ab jaise prorerty ko call krne ke liye pranthesis () lgane   
// ki jrurt nhi rhti hai pr jaise fullName method ke aage () lgaane ki 
// jrurt pdti hai


// to agar hum chate hai ki method ko bhi prorperty ki trh access kr le to
// get lga lete hai aage


class Person{
    constructor(fName , lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    // ab isse property ki trh treat krna hai
    get fullName(){
        return `${this.fName} ${this.lName}`;
    }
    
    set fullName(fullName){
        const [firstname ,lastname] = fullName.split(" ");
        this.fName = firstname;
        this.lName = lastname;
    }
}

const person1 = new Person("Ravi" , "Vaishnav" , 21);  

console.log(person1.fName); // Ravi
console.log(person1.fullName); //Ravi Vaishnav

// ab jaise firstname and lastname change krna hai
// to normal bhi kr skte jaise

// person1.fName = "Mohit";//methode 1
// ek koi method bhi bna skte jo do arguments le lega 
// and class ke andar this.fname, this.lname krke 
// property set kr dega


// ab set ki help se dekhte hai
person1.fullName = "Mohan Lal";

console.log(person1.fullName);//Mohan Lal
console.log(person1.fName);//Mohan

