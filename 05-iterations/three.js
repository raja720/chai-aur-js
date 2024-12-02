// for of 
// ["","",""]
// [{},{},{},{}]

let array = [1,2,3,4,5,6,7,8,9];

for (const num of array) {
    console.log(num);
    
}

const greetings = "hello world"

for (const i of greetings) {
    console.log(`each char is ${i}`);
    
}

// Mpas 

const map =new Map()
map.set("IN","India")
map.set("USA","United State of America")
map.set("FR","France")
map.set("IN","India")// map is known as its unique behaviour it can print unique value 

// console.log(map);

for (const [key , value] of map) {
    console.log(key , value);
    
}
for (const element of object) {
    
}

const myObject = {
    "Game1":"free fire",
    "Game2":"Pubg",
    "Game3":"khelega"

}
// for of loops doesn'nt working with object because object is not iterable 
                                //   88888
// for (const [key , value] of myObject) {
//     console.log(key ,value);
    
// }