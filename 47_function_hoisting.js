// function hoisting

hello();

function hello(){
    console.log("hello world");
}

// we can call function before declaration that is called hoisting
// but this work only in case of function declaration.

// gives error if we use it in case of function expression or arrow function.
// const tem = function() -> yh hota hai function expression

// hoisting 

// hello();

// function hello(){
//     console.log("hello world");
// }


//normal variable bnane se phle usko access kroge to agar variable let ya const se
// banaya hoga to error dega and agar var se bnaoge to undefined dega
console.log(hello1);
var hello1 = "hello world";
console.log(hello);