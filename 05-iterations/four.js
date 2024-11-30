const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby", 
}

for (const key in myObject) {
   console.log(`${key} is for ${myObject[key]}`);
   
}

const programming = ["js","ruby","phy","c++","java"];

for (const key in programming) {
    console.log(`${key} is for ${programming[key]}`);
    
}

const map =new Map()
map.set("IN","India")
map.set("USA","United State of America")
map.set("FR","France")
map.set("IN","India")

for (const key in map) {
  console.log(key);
//   this loop can not print anything because map is nott iterable
}