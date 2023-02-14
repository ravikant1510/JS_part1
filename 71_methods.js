// Methods : function inside object
"use strict"
const person = {
    name : 'Ravi',
    age :21,
    about : function(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    },
    setvalue : function(name, age){
        this.name = name;
        this.age = age;
    }
    // this ki value jab code run ho rha hota hai tb pta lgti hai
}
// this ek object hai
person.about();
// yh pr person call kr rha hai to yh pr this object person hi hoga

person.setvalue("labh" , 20);

person.about(); // values  change ho chuki hai


function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo // aise bahr function bna ke bhi assign kr skte ho
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

// bahr ka this window object hota hai


function myFunc(){
    console.log(this);
}
myFunc();
window.myFunc();
// dono main se kaise bhi call krne ek hi baath hai to
// this inside myfunc is window object only
// pr aagr strict mode main kaam krte hai to undefined aa jayega in case of myFunc()
