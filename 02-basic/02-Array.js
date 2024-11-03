const mysuperheroes = ['saktiman','nagraj','mithun','elvis']
const dcSuperhero = ["superrman","flassh","batman"]


// mysuperheroes.push(dcSuperhero);

// console.log(mysuperheroes);
// console.log(mysuperheroes[4][2]);


const allHeroes = mysuperheroes.concat(dcSuperhero);

console.log(allHeroes);

const all_heroes = [...mysuperheroes,...dcSuperhero,...allHeroes];

console.log(all_heroes);

const another_array = [1,2,3,[5,64],22,[2,3,4,[35,75,765]]]

const flat_anotherarray = another_array.flat(Infinity)
console.log(flat_anotherarray);

console.log(Array.isArray("Shriti"));
console.log(Array.from("Shriti"));
console.log(Array.from({name:"shriti"})); //Intresting

let score1 = 1001
let score2 = 1002
let score3 = 1003

console.log(Array.of(score1,score2,score3));


