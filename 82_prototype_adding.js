function createUser(firstName, lastName, email, age, address){
    // ab prototype main jaake add kr diya
    // and property nhi milne pr prototype main jake check krne ki bol di jaye
    const user = Object.create(createUser.prototype );
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};

createUser.prototype.is18 = function(){
    return this.age >= 18;
};

createUser.prototype.sing = function(){
    return 'toon na na na la la ';
};

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());