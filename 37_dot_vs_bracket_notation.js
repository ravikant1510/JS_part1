// const person= {
//     name: "Ravi",
//     age: 21,
//     "Last name": "vaishnav"
// }

// console.log(person);

// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

console.log(person["person hobbies"]);
// console.log(person."person hobbies"); 
// aise nhi likh skte

person[key] = "harshitvashisth@gmail.com";
// yh person["key"] likhte to fir key-value pair main key key naam ho jata but aise 
// ab key email hoga and value jo email id hai vo rhegi
console.log(person);