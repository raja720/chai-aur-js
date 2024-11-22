let userEmail = "hsfiuerrbfuysf";

if(userEmail){
    console.log("user is loggedIn");
    
}else{
    console.log("don't have user email");
    
}

// falsy value 

// false, 0 ,-0 , null, NaN, "" , BigInt 0n , undefined

// truthy vlaue 

// [], "0", " ", {}, "flase",function(){} ,

let userArray = []; // this function check our array is empty or not

if(userArray.length === 0){
    console.log('this is array is empty');
    
}
 
const emptyObject = {} //this function check our obj is empty or not

if(Object.keys(emptyObject).length === 0){
    console.log('object is empty');
    
}

// Nullish coleascing operator ?? 

let val1;
// val1 = 5??10;
// val1 = null ?? 10
val1 = undefined ?? null ?? 40




console.log(val1);


// ternary operator
// condition ? true : false

const teaprice = 60;
teaprice <= 50 ? console.log("equal of 60"): console.log("more than 60");



