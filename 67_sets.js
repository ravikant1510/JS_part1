// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
const st1= new Set([1,2,2,3]);
console.log(typeof st1); // set ek object hai
console.log(st1);
numbers.add(1);
numbers.add(2);
numbers.add(items); // aise different data type bhi add kr skte hai
numbers.add(items);//yh items fir se add nhi hoga

numbers.add(['item1', 'item2']);
numbers.add(['item1', 'item2']); // aise add krne pr do baar add ho gya kyunki
// dono alg array hai, dono ka address alg hai bhle hi content same ho


if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}

for(let number of numbers){
    console.log(number);
}

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}
// set main .length property nhi use kr skte error aa jayega
console.log(length);

