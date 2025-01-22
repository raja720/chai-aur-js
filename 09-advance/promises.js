const promiseOne = new Promise(( resolve , reject )=>{
    // do an async task 
    setTimeout(() => {
        console.log("raja singh is the noob");
        resolve()
    }, 1000);

})
promiseOne.then(()=>{
    console.log("promise consumed");
    
})

new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);

}).then(()=>{
    console.log("async task 2 completed");
    
})

const promiseThree = new Promise((resolve ,reject )=>{
    setTimeout(() => {
        console.log("async task 3");
        resolve({username:"chai" , email: "rajababu@gmail.com"})
        
    }, 2000);

})

promiseThree.then((user)=>{
    console.log(user);
    
})


const promiseFour = new Promise(()=>{
    setTimeout(() => {
        
    }, 1000);
})