const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

const myFunc = user1.about;
myFunc(); // undefined undefined aa jaeyga
// yha mistake yh ki 
// apn ne about call nhi kiya, just assign kr diya to in that case
// it internally will be like
// myFunc = function(){
//     console.log(this.firstName, this.age);
// }
// to aise case main to this window object hi to hota hai


// to correct way is
const myFunc1 = user1.about.bind(user1);
myFunc1();
user1.about();