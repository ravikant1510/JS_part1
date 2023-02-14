function hello(){
    console.log("Hello world");
}

// in javascript the functions are ====> function + object
// they can be treated as object also

console.log(hello.name); // hello


// we can add over own properties
hello.myUniqProperty = "very unique value";
console.log(hello.myUniqProperty);//very unique value

// function object ki trh mil rhe hai, mtlb vo free space hai
// and that is called prototype

// prototype property is present in functions only 
// and prototype ko khali object ki trh treat kro

// hello.prototype -> vh khali object hai 
hello.abc= "pqr";
hello.prototype.abc = "abc";
console.log(hello);
console.log(hello.prototype);
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "Chan kittah";
}

console.log(hello.prototype.sing());
console.log(hello.prototype);
