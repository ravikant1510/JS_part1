 // nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'mal'},
]

const [user1,,user3] = users;

console.log(user1);
console.log(user3);

// user1 ka firstName and user3 ka gender
const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);