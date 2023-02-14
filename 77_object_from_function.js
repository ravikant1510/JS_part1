const user2 ={
    firstName : "Ravikant",
    lastName : "Vaishnav",
    email: "abc@gmail.com",
    age:21,
    address : "Bharliyas , Raj",
    about : function(){
        return `name is ${this.firstName}, age is ${this.lastName}`;
    },
    is18 : function(){
        return this.age >= 18
    }
}
// ab ek user to shi hai pr aise bhut saare users ko add krna hoga to aise to bna 
// nhi skte hai na, so for that apn function se bna skte hai



// function ke through object create krna
// add key value pair
// object ko return krega  

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}


const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);