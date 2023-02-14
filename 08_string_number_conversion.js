// typeof operator 

// data types (primitive data types)
// string -> "harhit"
// number -> 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

 
// let firstName = "harshit";
let age = 22;
console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
age = age + "";
console.log(typeof(age));// "22"
age = 33;
age = String(age);
console.log(typeof age);


// // convert string to number. 

// let myStr = +"34";

let myStr = 1 + +"34";

console.log(typeof myStr); // number 
console.log(myStr); // 35


// let age = "18";
// age = Number(age);
// console.log(typeof age);

let num1 = "12";
let num2 = "30";
let num3 = +num1 + +num2;
console.log(num3);//42 

