function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
    
}
sayMyName()

function addTwoNumber(number1,number2){

    // console.log(number1 + number2);
    return number1 + number2
    
}
const result=(addTwoNumber(2,3))

// console.log("Result:",result);\

function loginUsermsg(username = "sam"){ //sam use for default parameter
    if(username === undefined){
        console.log("please enter a userName");
        return
    }
   return `${username} Just logged In`

}

console.log(loginUsermsg(''))

function calculatecartPrice(val1,val2,...num1) {
    return num1;


}
// console.log(calculatecartPrice(200,400,500,1000));

const user = {
    name : "raja",
    coursename :"js hindi",
    price : 1999

}

function coursedetail (anyobject){
    console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`);
    

}

coursedetail({
    name:"babulaal",
    price: "2lakh"
})

const newarray = [200,300,400,500];

function returnArrayValue(getArray) {
    return(getArray[3])
}

// console.log(returnArrayValue(newarray));
console.log(returnArrayValue([200,300,400,50000]));
