//arrow function ka this apne se 1 level uper se leta hai 

// arrow functions 


const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        // yha this window ko point kr rha user1 ko nhi
        console.log(this.firstName, this.age);
    }   
}

user1.about();
user1.about.call(user1);
// in dono case main undefined undefined de rha as this window object ko point kr
// rha hota hai


user1.about(user1);