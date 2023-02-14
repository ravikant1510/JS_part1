
// ab tum array ke andar .find , .indexOf, .fill,.keys,.join yh sab method kha se mill rhe hai
// yh sab method uske prototype main hote hai... But wait a minute prototype to sirf function ke
// hi hote hai 
// the point is array khud bhi internally 
// let numbers = new Array() ... aise kr ke bnti hai, so prototype aise hi bn jate hai

// to print prototype of anything we have 
// console.log(Object.getPrototypeOf(numbers));

// Array ka prototype array hi hota hai, object ka object but object ,
// array ka prototype object bole to bhi kya dikkat hai, array bhi to ek object hi hoti hai


// prototype ko set bhi kr skte hai pr uska koi use nhi hai
function hello(){
    console.log("hello");
}
// prototype ko empty array ke equal kr diya
hello.prototype = [];
// array main 1 push kr diya 
hello.prototype.push(1);