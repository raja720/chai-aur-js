fetch('https://something.com').then().finally().catch()

const promiseOne = new Promise((resolve, reject) => {
    // Do any Async task 
    // Db call , Cryptography , network call
    setTimeout(() => {
        console.log('async task is complete');
        resolve()
    }, 1000);

})

promiseOne.then(() => {
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async2 task is completed');
        resolve()
    }, 1000);
}).then(() => {
    console.log("async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ Name: "raja", email: "rajababu@gmail.com" })
    }, 1000);
})
promiseThree.then((user) => {
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            resolve({ username: "Raja singh", pass: "12345" })
        } else {
            reject(" ERROR: something went wrong")
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.pass
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(()=>{
    console.log("the promise is either resolved or reject");
})


const promiseFive = new Promise((resolve ,reject)=>{
    setTimeout(() => {
        const error = false
        if (!error) {
            resolve({ username: "JavaScript", pass: "123345" })
        } else {
            reject(" ERROR: JS went wrong")
        }
    }, 1000);
})

