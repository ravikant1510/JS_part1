// how to iterate object 
// for in loop 
// Object.keys 

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// yha in main keys aati jayegi, array ki trh index nhi,
// now we have key in variable so we can't use . dot notation to 
// get the value, we have to use bracket notation 
// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);//method 1
//     console.log(key," : " ,person[key]);// method 2
// }

// IMP 
console.log(typeof (Object.keys(person))); // Object.keys will give an array of keys
// with the help of that we can iterate the array
const val = Array.isArray((Object.keys(person))); // true
console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}