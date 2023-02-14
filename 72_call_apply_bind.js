const user1 = {
    firstName : "Ravikant",
    age :21,
    about : function(hobby , fevMusician){
        console.log(`user name is ${this.firstName} , age is ${this.age}`);
        console.log(`${hobby} and fev singer is ${fevMusician}`);
    }
}


const user2 = {
    firstName : "Suresh",
    age :25
}
user1.about();// hobby and fevMusician main main undefined undefined aa jayega
user1.about("gym" , "Shubh");


// now user2 dosen't have about method but can call that by the help of 
// .call method

user1.about.call(user2,"gym" , "Shubh");

// call ke andar kuch to pass krna hi hoga hoga 
// user1.about.call() -> yh undefined de dega hr jgh, iske andar jo parameter pass kiya 
// vo jake this ki value le lega
// to user1 ke liye bhi call krna ho to
user1.about.call(user1); // aise likhna pdega 

console.log(" ");

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user3 = {
    firstName : "harshit",
    age: 8,   
}
const user4 = {
    firstName : "mohit",
    age: 9,
    
}
// aise function call krne pr bhi user3 this ka object bn jayega and 
// function call ho jayega
about.call(user3, "guitar", "bach"); 


// .apply -> ismain aage ke dono ko array main bhej skte hai
// bs yhi difference hai, internally yh bhi call ko hi use krta hai
about.apply(user3, ["guitar", "bach"]);

// .bind ek function return kr deta hai jise apn aage kabhi kaam pdne pr call kr skte hai
const func = about.bind(user2, "guitar", "bach");
func();
 