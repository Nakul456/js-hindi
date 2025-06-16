const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const Dc_heros = ["superman" , "Flash" , "Batman"]

// marvel_heros.push(Dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(Dc_heros)
// console.log(allHeros);

// Dc_heros.concat(marvel_heros)
// console.log(Dc_heros);

const all_new_heros = [...marvel_heros,...Dc_heros]
console.log(all_new_heros);

//the above is the example of the speard operator

const another_array = [1,2,3,[4,5,6,5],8,[9,70,[64,44]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "hitesh"})); // intersting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2.score3));




