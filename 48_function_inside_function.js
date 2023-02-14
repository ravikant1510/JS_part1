// functions inside function 

// kaise bhi and kisi bhi type ke function ke andar kisi bhi type ka function bna skte hai
function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));

    // in functions ko isi function ke andar call kr skte hai
}
app();
// myFunc bahr se call krne pr error dega : Uncaught ReferenceError: myFunc is not defined

myFunc();
