let Name = "Raja singh"
let repocount = 20

console.log(`My name is ${Name} and the repocount is ${repocount}`)

const gameName = new String("Raja-singh-the-coder")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.toUpperCase())
console.log(gameName.length)
console.log(gameName.charAt(3))
console.log(gameName.indexOf('g'))

let newString = gameName.substring(0,6);
console.log(newString)

const anotherString = gameName.slice(0 ,6)
console.log(anotherString)

let newStringOne = "  raja   "
console.log(newStringOne);
console.log(newStringOne.trim())

let url = "https://rajasingh%34hiteshchoudhary"
console.log(url)
console.log(url.replace('%34', '-'))
console.log(url.includes("rajasingh"))

console.log(gameName.split("-"))
