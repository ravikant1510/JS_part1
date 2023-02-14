// spread operator in array
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"]; // yh ["1","2"...] iss type se bn jayegi 
// console.log(newArray);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
    // baad vali overwrite kr degi
    key1:"Value36"
};


const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
};
  
// nya object bna lega, jisme saare key value pairs rhenge
// isme bhi objects ki keys same hui to baad vala key value pair update kr dega
const newObject = { ...obj2, ...obj1, key69: "value69" };
console.log(newObject);
  
// spreading obj2,obj1 and some extra value
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);