// lexical scope 
// lexical scope kuch nhi bs koi variable ki value dekhni hai to 
// phle apne scope main dekho fir uske upar vale main dekho (usko lexical environment bolte hai)
const myVar = "value1";

function myApp(){
    

    function myFunc(){
        const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();