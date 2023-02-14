// let and const are block scope and 
// var is function scope

function myApp(){
    // ab jaise var Firstname main khi bhi bnu is function main, 
    // isi function main us ko khi se bhi access kr skta hun

    // pr if ke andar ke block scope main firstName ko let ya const krke bnata 
    // and bahr se access krna chahta to error de deta 
    // agar varible bahr hota and access andar se krte to vo 
    // lexical sscope ke through access ho jata
    var count  = 5;
    if(true){
        var firstName = "Harshit";
        console.log(firstName);
    }

    console.log(firstName);
}
console.log(firstName);
// console.log(count);
myApp();