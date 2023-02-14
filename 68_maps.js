// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one" // 1 as string store hoga
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
const person = new Map();
person.set('firstName', 'Harshit');
person.set('age', 7);
person.set(1,'one');
// person.set([1,2,3],'onetwothree');
person.set({1: 'one'},'onetwothree');
// console.log(person);
console.log(person.get(1)); // nhi hone pr undefined dega

// object ki trh person.firstName ya person["firstName"] nhi kr skte, error aa jayega
 
console.log("");

for(let key of person.keys()){
    console.log(key, typeof key);
}
console.log("");

for(let key of person){
    console.log(key); // yha key nhi pura key-value pair de rha
}
console.log("");

// to yha destructure kr ke (as array ki form main mil rha tha), key and 
// value ko array main dal kr de rha tha
for(let [key, value] of person){
    // console.log(Array.isArray(key));
    console.log(key, value)
}
console.log("");

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

// yha object ko hi key bna diya
const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);


// ek array se map bnane ka trika
const mp2 = new Map([['fname', 'ravi'], ['age' ,2]]);
console.log(mp2);
// yh map bn gya jisme fname ravi hai and age 2 hai