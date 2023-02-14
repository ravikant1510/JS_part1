let users = [4,5,6,3];

function square(num){
    return num*num;
}

// map nya array bnayega and hr index ke corresponding element store krte jayega
// agar function kuch return nhi krega to undefined store hota jayega
let squareArray = users.map(square);
console.log(squareArray);

// const numbers = [3,4,6,1,8];

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const usersobj = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = usersobj.map((user)=>{
    return user.firstName;
});

console.log(userNames);

// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.