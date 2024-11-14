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