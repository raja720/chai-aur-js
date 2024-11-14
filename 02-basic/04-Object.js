const tinderUser = new Object()

tinderUser.id = "123abc";
tinderUser.name = "raja singh ";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "shriti@samastipurwali",
    fullame: {
        userFullname: {
            firstName: "raja singh",
            lastName: "babu",
            age: 2020
        }

    }
}

console.log(regularUser.fullame.userFullname.firstName);

let obj1 = { 1: "a", 2: "b", 3: "c" };
let obj2 = { 4: "d", 5: "e", 6: "f" };
let obj4 = { 7: "d", 8: "e", 9: "f" };

// let obj3 = {obj1,obj2};
// let obj3 = Object.assign({}, obj1, obj2,obj4);

let obj3 = {...obj1,...obj2,...obj4}//(spread operator)

console.log(obj3);

const user = [
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"rfv@gmail.com"
    },
    {
        id:1,
        email:"rvcd@gmail.com"
    }
]


console.log(user[2
].email);

console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));


const course = {
    courseName : "js course",
    price : "999",
    courseInstructor : "raja singh"
     

}

// course.courseInstructor
const {courseInstructor:instructor} = course;

console.log(instructor);


{
    "name":"raja singh",
    "couseName": "js in hindi",
    "price":"free"
}

[
    {},
    {},
    {}
]