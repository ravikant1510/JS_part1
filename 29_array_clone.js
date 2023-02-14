// how to clone array 

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"]; //way 1 to put same element manually
// let array2 = array1.slice(0); // way 2 
// let array2 = array1.slice(0).concat(["item3", "item4"]); // method to add some more elements


// way 3:- concationg with empty array. 
// let array2 = [].concat(array1);

// let array2 = [].concat(array1,["item3", "item4"]); // with some extra element

// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)