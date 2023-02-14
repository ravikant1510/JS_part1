// some method

const numbers = [3,5,6,3];
// koi bhi number hai jo ke condition satisfy krta hai
// then return true

const ans = numbers.some((num)=> num%2 ==0);
console.log(ans);



const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 250000},
]

const ans1 = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans1);