const user = {
  username: "raja singh",
  price: 1000,

  welcomeMEssage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);

  }

}
// user.welcomeMEssage();
// user.username = "shiriti"
// user.welcomeMEssage();


// function chai(){
//   let username = "raja"
//   console.log(this.username);//we cannot use this method in function or array;


// }
// chai()

// let arrow =  ()=>{
//   let username = "raja"
//   console.log(this.username);


// }
// arrow()

// explicit return neeed curly braaces and express return method
const addthree = (num1, num2, num3) => {
  return num1 + num2 * num3

}
console.log(addthree(1, 3, 6));

// implicit return do not need curly braces and return keyword

const addTwo = (num1, num2) => ({usernames:"raja singh"})

console.log( addTwo(1, 20))