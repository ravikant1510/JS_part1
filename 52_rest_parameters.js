// rest parameters

function myfun(a,b,c){
    console.log(`value of a id ${a}`);
    console.log(`value of b id ${b}`);
    console.log(`value of c id ${c}`);
}
myfun(2,3); // 2,3 undefined
myfun(2,3,4);
myfun(2,3,4,5); // 2,3,4

// now the rest parameters
function myfun1(a,b,...c){
    console.log(`value of a id ${a}`);
    console.log(`value of b id ${b}`);
    console.log(`value of c id ${c}`);
}
myfun1(2,3,4,5,6,7); // c main baki bce jo chle jayenge



function addAll(...arr){
    let sum = 0;
    for(let t of arr){
        sum += t;
    }
    console.log(arr);
    console.log("the sum of elements are ",sum);
}

addAll(1,2,3,54,5,4,3);

