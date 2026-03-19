let marvel_Heros=["ironman","spiderman","thor"];
let dc_heros=["superman","batman"];

// let all_heroes=marvel_Heros.concat(dc_heros);
// console.log("after concat:",all_heroes);

// marvel_Heros.push(dc_heros);
// console.log("after push:",marvel_Heros);

const all_superheros=[...marvel_Heros,...dc_heros]
console.log(all_superheros);

let arr=[1,2,3,[4,5,[6,7,8]]];
console.log(arr.flat(Infinity));

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));//interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));