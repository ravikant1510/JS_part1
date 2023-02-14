// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// method bnate tyme key-value type bnane ki jrurt nhi hai
// direct bna skte hai

const user1 = {
    firstName : "harshit",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}



user1.about();