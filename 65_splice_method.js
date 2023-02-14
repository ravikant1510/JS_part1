// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];
const newarr = myArray.splice(0); // array ko transfer kr dega
console.log(newarr);
console.log(myArray);

// delete
// delete item will be return in form of array
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = newarr.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(newarr);

const arr = ['num1' , 'num2', 'num3'];
arr.splice(3,0,...deletedItem);
console.log(arr);