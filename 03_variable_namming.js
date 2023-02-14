// declaring a variable using var keyword
// "use strict"; 
// ( to use var keyword strictly ) 


// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase for variable,
// start with big and then camelCase for class name

var x="sanidhya";
var y=20;
console.log(x , y);
var b=true;
var c=b;
console.log(c);
// without using var keyword variables can be declared by simply using variable name only
digit=1003773;
console.log(digit);
var value1=10;
console.log(value1+" ravi ");

// to get A^B
A=2 ,B=4;
console.log(A**B);