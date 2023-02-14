// reduce 

const numbers = [1,2,3,4,5];
// phle accumulator 0th index vale ki value le leta hai
let sum = numbers.reduce((accumulator, current)=>{
    return accumulator = accumulator+current;
})

console.log(sum);


const usercart = [
    {prodId:1, price : 2000},
    {prodId:2, price : 2000},
    {prodId:3, price : 2000},
    {prodId:4, price : 2000},
]

let expense = usercart.reduce((accumulator,current)=>{
    return accumulator + current.price;
},0) // accumulator ki initial value bhi pass kr skte hai

console.log(expense);


const numbers1 = [175, 50, 25];
function myFunc(total, num) {
    return total - num;
}
// yh phla element 175 le lega fir
// 175 -50 - 25 = 100 de dega

numbers1.reduce(myFunc);
