const marvel_heroes = ['thor','ironman','Spiderman'];

const dc_heroes = ['superman','flash','batman'];

//marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes);

//concat returns a new array
//const allHeroes = marvel_heroes.concat(dc_heroes);
//console.log(allHeroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes];
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const useable_another_array = another_array.flat(Infinity);
//console.log(useable_another_array);

console.log(Array.isArray("Ansh"));
console.log(Array.from("Ansh"));
console.log(Array.from({name:'ansh'}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));


