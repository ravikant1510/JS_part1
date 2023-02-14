// parameter destructuring 

// object 
// react 

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

// aise andar jake bhi object ko destructure kr skte hai 

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


//pr jo jo chahiye unko pass krte time pe bhi likh skte hai
// varible same rkho ya firstName ka change kiya hai vese 
// change kr do
function printDetails({firstName : fname, gender, age}){
    console.log(fname);
    console.log(gender);
    console.log(age);
}

printDetails(person);
