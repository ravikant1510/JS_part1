// filter method 

const numbers = [1,3,2,6,4,8];

// filter main iseven function hmesa bollen value return krna chahiye
// true hoga to nye array main add ho jayega, nhi to nhi hoga  
function isEven(number){
    return number%2 === 0;
}

// yh nya arrar bna diya hai even numbers ka 
const evenNumbers = numbers.filter(isEven);
// likh nhi rha baki iseven ki jgh koi arrow function ya koi normal function
// likh skte hai

console.log(evenNumbers);

// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });
// console.log(evenNumbers);