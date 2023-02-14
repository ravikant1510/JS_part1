// find method
const myArray = ["lembo", "cat", "dog", "motor"];

function isLength3(string){
    return string.length === 3;
}

// find main callback function argument rhega
// first matching vala return kr dega
const ans = myArray.find(isLength3); // cat

// arrow function
const ans1 = myArray.find((str)=> str.length == 7); // undefined

// agar koi match nhi hua to undefined return krega
console.log(ans);
console.log(ans1);


const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser); // user id 3 vala object