//for loop

for (let i = 0; i <=10; i++) {
    const element = i
    if (element == 5) {
        console.log(`${element} is the middle number`);
        
    }
    console.log(element);
        
}
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value is ${i} `);
    
    for (let j = 1; j <= 10; j++) {
    //    console.log(`inner loop value is ${j} and outer loop value is ${i}`);
    
    // console.log(` ${i}*${j} = ${i*j}`);
    
       }
    


}

let myArray = ["raja" , "baja" , "khaja"];
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
    
}

// break and continue 

// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     if (element == 10) {
//         console.log(`${element} is middle number  `);
//         break
//     }
//     console.log(element);
    
    
// }

for (let i = 1; i <= 20; i++) {
    
    if (i == 10) {
        console.log(`${i} is middle number  `);
        continue
    }
    console.log(i);
    
    
}