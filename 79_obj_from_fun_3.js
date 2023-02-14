// ab pichle method main kami yhi hai ki agar koi method add yh delete krna chahta hai to
// usko usermethods main bhi change krna pdega and vo jo function hai usme bhi krna 
// pdega

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj = {
    key3 : "value3"
}
console.log(obj.key1); // udefined 

// agar obj ke pass key1 nhi mile to vo obj1 
// ke pass jaye or vha dekhe 
// to use create krne ka trika 

// us object main nhi milne pe __proto__ main jake dekhega
// __proto__ is same as [[prototype]] but ek prototype bilkul alg hai

const obj2 = Object.create(obj1);// iss line se object 2 ka proto object 1 set ho rha hai 
console.log(obj2);
console.log(obj2.key1);
console.log(obj2.__proto__);


console.log("");


const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());