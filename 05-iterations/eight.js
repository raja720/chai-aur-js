// using reduce method 

const mynums = [1,2,3,4];

// const mytotal = mynums.reduce(function (acc , currval){
//     console.log(`acc : ${acc} and currval :${currval}`);
//     return acc + currval
// },0)
// console.log(mytotal);

const mytotal = mynums.reduce((acc , currval)=> acc+ currval,0)

console.log(mytotal);


const shoppingCart = [
    {
        itemName : "js",
        price: 1200
    },
    
    {
        itemName : "phython",
        price: 900
    },
    
    {
        itemName : "java",
        price: 12300
    },
    {
        itemName : "data science course",
        price: 39000
    }
    
    
]

const totalcartprice =shoppingCart.reduce((acc , item)=>acc + item.price,0)
console.log(totalcartprice);