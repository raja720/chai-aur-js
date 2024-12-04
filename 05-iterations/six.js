const coding = ['js', 'cpp', 'java', 'phy', 'ruby']

// const values= coding.forEach((item)=>{
//     console.log(item);


// })
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// using filter method 
// const mynumber=myNums.filter((num) => {
//     return num < 4})
// console.log(mynumber);



// using for each method 

// const newNums = []
// myNums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num)   
//     }

// })
// console.log(newNums);


const myself=myNums.filter((num)=>{
    return num > 4
})
console.log(myself);
