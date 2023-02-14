// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}


// ?. lgane se vo property jo abhi bni nhi hai
// use access krne main error nhi aayegi , 
// vo undefined return kr dega
console.log(user?.firstName);
console.log(user?.address?.houseNumber);