// normal for loop bhi lga do .length property use kr ke

// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
    // fruit ="h";// iska koi frk nhi pdega, value hai, reference nhi hai
}
console.log(fruits2);
console.log(fruits);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }