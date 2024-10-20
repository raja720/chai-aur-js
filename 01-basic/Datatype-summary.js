//  PRIMITIVE DataType

// There are seven primitive DataType
// 1.String , 2.Number , 3.Boolean , 4.Null , 5.Undefined , 6.Symbol , 7.BigInt

// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 1234567890987654345676543654367654365n;

// Refrence (Non primitive)
// Array, Object , Function

// Array
let heroes = ["saktiman", "doremon", "spiderman", "ironman"];

// Object

let student = {
  Name: "raja singh",
  Roll: 20,
  Age: 18,
  Pass: true,
};
console.log(student);

let myfunstion = function () {
  console.log("ram");
};

// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap(Non Primitive)

let myName = "raja bhagat";

let myrealname = myName
myrealname= "raja Singh"
console.log(myName)
console.log(myrealname)

let userOne = {
    name:"raja singh",
    email:"rajasingh2004@gmail.com",
    upi:"kjhgfdbw1234"
}
console.log(userOne)
let userTwo = userOne
userTwo.name ="raja babu"
console.log(userTwo)
console.log(userOne)