// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// Object ko aise curly braces lga ke bnana hi object literal khlata hai
// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
console.log(person["name"]);
console.log(person.age);
// console.log(person.hobbies);

// how to add key value pair to objects
person["person"] = "male";
person.email = "abc";
console.log(person);


// bracket notation main braces ke anagr key ko  "" inke andar hi likhna hota hai (double ya single cought bhi lga
// skte hai )
// aise nhi likhne pr error aa jata hai
// kyunki JS main key by default string main hi hoti hai