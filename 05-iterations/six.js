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


// const myself=myNums.filter((num)=>{
//     return num > 4
// })
// console.log(myself);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let newnums = []

//   books.forEach((bk)=>{
//     if (bk.publish === 1986) {
//         newnums.push(bk)
//     }
//   })
//   console.log(newnums);

//  let newbk =books.filter((bk)=> bk.publish === 2009)
//   console.log(newbk);
  
//     let newbk =books.filter((bk)=> {
//         return bk.publish === 2009})
//   console.log(newbk);
  
let newbk = books.filter((bk)=> {
    return bk.publish >= 1900 && bk.genre === "History"
})
console.log(newbk);
