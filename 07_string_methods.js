// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "     harshit   ";
console.log(firstName);
firstName = firstName.trim();
console.log(firstName);

// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // ARSHIT
console.log(newString);