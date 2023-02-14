// every method

const numbers= [2,5,6,4,3,8];

function isEven(num){
    return num%2 === 0 ;
}

const ans = numbers.every(isEven);
// callback function bhi true/false return krta hai
// and every bhi true false return krta hai
// jo callback ki condition hai vo agar sab pe apply hoti hai to 
// true nhi to false

console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans1 = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans1);