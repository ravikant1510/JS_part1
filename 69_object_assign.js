// clone using object.assign


const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// aise assign krnge to ek object main change krne pr dusre main bhi hoga
const obj2 = obj1;

// obj1['key3'] = "value3";

// console.log(obj1);
// console.log(obj2);

// so ways to clone are
const obj3 = {...obj1}; // way 1
const obj4 = Object.assign({},obj1); // way 2

obj1['key3'] = "value3";

console.log(obj3);
console.log(obj4);
