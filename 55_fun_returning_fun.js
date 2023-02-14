// function returning function

function myFun(){
    function hello(){
        return "function returned";
    }

    return hello;

    // aise bhi return kr skte the
    // return function(){
    //     console.log("another way");
    // }
}

let ret = myFun();
console.log(ret()); // function returned



// aise function ko return krna,pass krna higher order function khlata hai