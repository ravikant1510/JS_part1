// some important array methods
// forEach method 
const numbers = [4,2,5,8];

function multiplyBy2(number, index){
    console.log(`index is ${index} , number is ${number}`); 
}

// for(let i in numbers)
//     multiplyBy2(numbers[i], i);


// syntex
// array.forEach(function(currentValue, index, arr), thisValue)
// forEach ek function as a input lega

// when called by foreach other things are optional
numbers.forEach(multiplyBy2);

console.log("")

// we can make anonymos function also 
numbers.forEach(function(number,index){
    console.log(`index is ${index} , number is ${number}`); 
})

console.log("");

const users =[
    {firstName : "Ravi" , age : 21},
    {firstName : "Ajay" , age : 24},
    {firstName : "Rahul" , age : 27},
    {firstName : "Dev" , age : 29},
]

// yha arrow function bhi lga skte hai
users.forEach(function(user){
    console.log(`Name : ${user.firstName} , and age is ${user.age}`);
})

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })