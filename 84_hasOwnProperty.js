function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};

CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};

CreateUser.prototype.sing = function(){
    return 'toon na na na la la ';
};

const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

// yh sare keys print kr dega including prototype vale
for(let key in user1){
    console.log(key);
}

console.log("");

// now we want ke yh prototype vale ko print na kre
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}