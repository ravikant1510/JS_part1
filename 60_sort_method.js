const numbers = [9,300,2,454,56];

// yh original array ko change krta hai unlike ki filter vgrh
numbers.sort();
// yh by default numbers ko string smj ke ASCII ke hisab se sort krta hai
console.log(numbers);

// the solution to sort the number is
numbers.sort((a,b)=>{
    return a-b; // for accending order
    // return b-a; // for decending
})

//arrow function
// numbers.sort((a,b)=> a-b);


console.log(numbers);


// string ke case main shi kam krga but agar Capital latter hai to fir
// uski ASCII value km hogi to usko phle rkh lega


// sorted accourding to age
const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.sort((a,b)=>{
//     return a.age - b.age;
// })

console.log(users);

// yha upar vale se pura users ka change ho rha tha
// if we want ki vo na ho

const smallToBig = users.slice(0).sort((a,b)=>{
    return a.age-b.age;
})


console.log();

console.log(smallToBig);