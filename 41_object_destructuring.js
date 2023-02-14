// object destructuring
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
};

// let , const jo bhi use krenge us type ke variable bn jayenge 

const {bandName , famousSong} = band;
console.log(bandName, famousSong);

// we can name some variables also like
const {bandName :b , famousSong :f } = band;
console.log(b,f);

// do varible bna lo and baaki bche uska restProps ka object bna lo
// let { bandName, famousSong, ...restProps } = band; 

// console.log(restProps);
// console.log(bandName);