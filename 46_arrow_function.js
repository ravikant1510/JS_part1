// function expression 
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = ()=>{
    console.log("happy birthday to you ......");
}


singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3)=>{
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans);


// function isEven(number){
//     return number % 2 === 0;
// }

// we can eleminate brackets in case of single variable only
const isEven = number =>{
    return number % 2 === 0;
}
console.log(isEven(2));

// can remove brackets and return statement in case of only 1 line
const firstChar = anyString =>  anyString[0];

console.log(firstChar("Ravi"));
const findTarget = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}