// ab new keyword se kya differences aa gye:
// apne aap empty object bna diya and use this ke equal kr diya , fir return bhi kra dega return likhe.
// other banifit is ki prototype set krne ki bhi 
// jrurt nhi pdi, yh sab apne aap set ho gye

// const user = Object.create(createUser.prototype ); iss type se prototype set krne ki 
// jrurt nhi pdi


function CreateUser(firstName, lastName, email, age, address){
    // yha empty object bnane ki jrurt nhi pdi
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this; 
    // yha pr return krane ki jrurt bhi nhi pdi
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
console.log(user1);
console.log(user1.about());


// developer ko pta lge ki new keyword lga ke hi krna hai uska convention hai ki 
// function ka first latter capital kr lete hai
