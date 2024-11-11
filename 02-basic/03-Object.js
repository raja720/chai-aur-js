// Object ;

//singleton
//object.create {constructor method under this method sigle ton create}

// USing symbol in a object

const mySym = Symbol("key1")
// Object literals
let JsUser = {
    name : "raja ",
    "full name":"raja singh",
    [mySym] :"myKey1",
    Age : 22,
    coder:true,
    email:"raja@google.com",
    lastLoggedIn:false,
    lastloggedIndays:["monday,wednesday,friday"]
}

// console.log(JsUser.email); //this is first method for print the array;
// console.log(JsUser["email"]); //this is another method for print the array;
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rajayahoo@gamil.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser) // use this method for freeze the object
JsUser.email = "rajaygolo@gamil.com"
// console.log(JsUser["email"]);

// console.log(JsUser);

JsUser.greetings = function () {
    console.log("Hello js user");
    
}
JsUser.greetingtwo = function () {
    console.log(`Hello js user , ${this.name}`);
    
}

console.log(JsUser.greetingtwo());

console.log(JsUser.greetings());

