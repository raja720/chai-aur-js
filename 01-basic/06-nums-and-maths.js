const score = 100;
const balance = new Number(100);

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.9836;

console.log(otherNumber.toPrecision(3));

const hundred = 1000000000;

console.log(hundred.toLocaleString("en-IN"));

// ++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++

console.log(Math);

// console.log(Math.abs(-4)) //this function convert negative value in positive
// console.log(Math.round(4.99))
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.99))

// console.log(Math.min(3,2,52,9))
// console.log(Math.max(3,4,52,9))

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+min)
